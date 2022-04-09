// GENERAL STUFF ------------ links to all the profiles + email
var linkedin = 'https://www.linkedin.com/in/dreth/';
var github = 'https://github.com/dreth';
var blog = '/blog/';
var about = '/about/';
var home = '/';
var status = '/status';
var projects = '/projects';
var cool_links = '/cool_links';
var playlists = '/playlists';
var email = 'mailto:contact@m.dac.ac';
var language;
var darkThemeLabel;
var lightThemeLabel;

// base links
const baseSpotifyLink = 'https://open.spotify.com/playlist/';
const wikipediaBaseLink = 'wikipedia.org/wiki/';
const wiktionaryBaseLink = 'wiktionary.org/wiki/';

// LANGUAGES -------------- get languages and labels
var langsJSON = $.getJSON('/data/languages.json');
var langs; 

langsJSON.done(langsJSON, (langsData) => {
    langs = langsData;
})

// BLOG STUFF -------------- lists of article info
var articlesJSON = $.getJSON('/data/articles.json');
var articleDates;
var articleLang;
var articleTitles;
var articleTag;
var articleEmoji;

articlesJSON.done(articlesJSON, (articleData) => {
    articleDates = articleData["articleDates"];
    articleLang = articleData["articleLang"];
    articleTitles = articleData["articleTitles"];
    articleTag = articleData["articleTag"];
    articleEmoji = articleData["articleEmoji"];
})

// PLAYLISTS STUFF -------- list playlists stuff
var playlistsJSON = $.getJSON('/data/playlists.json');
var playlistsContent;
var homepagePlaylist;

playlistsJSON.done(playlistsJSON, (playlistsData) => {
    playlistsContent = playlistsData["playlists"];
    homepagePlaylist = playlistsData["homepage_playlist"];
})

// COOL LINKS STUFF -------- cool links stuff
var coolLinksJSON = $.getJSON('/data/links.json');
var coolLinksContent;

coolLinksJSON.done(coolLinksJSON, (coolLinksData) => {
    coolLinksContent = coolLinksData;
})

// PROJECTS STUFF -------- projects stuff
var projectsJSON = $.getJSON('/data/projects.json');
var projectLinkHeading;
var projectHeadings;
var projectSections;
var projectNames;
var projectDescriptions;
var projectLinks;

projectsJSON.done(projectsJSON, (projectsData) => {
    projectHeadings = projectsData["projectHeadings"];
    projectLinkHeading = projectsData["projectLinkHeading"];
    projectSections = projectsData["projectSections"];
    projectNames = projectsData["projectNames"];
    projectDescriptions = projectsData["projectDescriptions"];
    projectLinks = projectsData["projectLinks"];
})

// ALL FILES LOADED?
allFiles = $.when(langsJSON, articlesJSON, playlistsJSON, coolLinksJSON, projectsJSON);

// COOKIES ---------------------------------------
function setCookie(key, value, time_in_days=365) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (time_in_days * 24 * 60 * 60 * 1000)); // expire in a year
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';SameSite=Lax' + ';path=/';
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

// FAVICON ---------------------------------------
var link = $('#icon').attr('href',"/assets/icons/icon.ico");

// DETECT BROWSER LOCALE -------------------------
if (navigator.language.substring(0,2) == 'es') {
    var browserLocale = 'es';
} else if (navigator.language.substring(0,2) == 'nl') {
    var browserLocale = 'nl';
} else {
    var browserLocale = 'en';
}

// take language from browser locale
language = getCookie('language') ? getCookie('language') : browserLocale;

// detect if user agent has safari
function isSafari() {
    return (navigator.userAgent.includes("Safari"))
}

// get window width
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  
  function getHeight() {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
  }
  

// generate page skeleton
function generateSkeleton(regen=false) {
    // SECTIONS -------------------------------------
    // sections that expand
    let expandSections = {
        'about':'about',
        'cool_links':'coolLinks',
        'playlists':'playlists',
        'projects':'projects'
    }
    // sections that are just a link
    let linkOnlySections = {
        'github':'github',
        'linkedin':'linkedin',
        'email':'email'
    }

    // only show 2 column layout if width > 1000
    let homepageBullets = '<div class="column leftcol-home divBorder">';

    // MAIN LOOP --------------------------------------
    // EXPAND sections
    let divideCount = 0;
    for (const [name, nameCC] of Object.entries(expandSections)) {
        divideCount += 1;
        // start the LI
        homepageBullets += `<div class="ml ${name}">`
        // add PAGE LINK
        homepageBullets += `<a href="#" onclick="this.href = ${name};" oncontextmenu="this.href = ${name};" class="b" id="${nameCC}HomepageLink"></a>`
        // add EXPANDER BUTTON
        homepageBullets += ` <a class="bp" id="${nameCC}ExpandPreview">⊕</a>`
        // ADD CLOSING LI AND PREVIEW DIV
        homepageBullets += `<div class="row" id="${nameCC}HomepagePreview"></div></div><br>`
    }

    // LINK sections
    for (const [name, nameCC] of Object.entries(linkOnlySections)) {
        // is this line the last one?
        let lastLineBreak = name === 'email' ? '' : '<br>';
        // start the LI
        homepageBullets += `<div class="ml ${name}">`
        // add PAGE LINK
        homepageBullets += `<a href="#" onclick="this.href = ${name};" oncontextmenu="this.href = ${name};" class="b" id="${nameCC}HomepageLink"></a>`
        // ADD CLOSING LI AND LINE BREAK
        homepageBullets += `</div>` + lastLineBreak
    }
    // close the UL tag
    // only show 2 column layout if width > 1000
    homepageBullets += '</div>'

    // ADD BLOG ARTICLE LIST
    let blogArticleList = `
        <div class="column rightcol-home divBorder">
            <div class="blogTitle">
                <h3 id="blogTitle"></h3>
                <br>
            </div>
            <div id="articleList"></div>
        </div>` 

    $("#homepageMainDiv").html(`${homepageBullets}${blogArticleList}`)
}


// HIDING STUFF THAT STARTS HIDDEN ---------------
function toggleSkeletonExpanders() {
    // hide lang name
    $("#langName").toggle()
}
// hide everything on page load
toggleSkeletonExpanders()

// generate menus
function loadObjects(langsObj, l=language) {
    // loop over fields
    for (const [itemType, items] of Object.entries(langsObj["objectIds_Field"])) {

        // check if field is actually in the page before doing anything
        for (const [fieldId, content] of Object.entries(items)) {
            // get translation
            translation = langsObj["content"][content][l]

            // loop over items
            if (document.getElementById(fieldId) && itemType == 2) {
                // PAGE TITLES ------------------------------------------------------------------------------
                $(`#${fieldId}`).html(`${translation} | Daniel A.`);

            } else if (document.getElementById(fieldId) && itemType == 1) {
                // field contents
                let fieldContent = '';
                // SPECIAL FIELDS ---------------------------------------------------------------------------
                switch(fieldId) {
                    // theme switcher
                    case 'themeSwitcher':
                        // arrangement of theme link
                        if (getCookie('theme') == 0) {
                            $("#themeSwitcher").html(`<a class='dt dts' onclick='changeTheme()'>🌒</a>`)
                            $("#mainStylesheet").attr('href','/assets/css/styles-light.css')
                    
                            // for articles
                            if (document.getElementById('articleStylesheet')) {
                                $("#articleStylesheet").attr('href','/assets/css/articleStyles-light.css')
                            }
                        } else {
                            $("#themeSwitcher").html(`<a class='lt lts' onclick='changeTheme()'>☀️</a>`)
                            $("#mainStylesheet").attr('href','/assets/css/styles.css')
                    
                            // for articles
                            if (document.getElementById('articleStylesheet')) {
                                $("#articleStylesheet").attr('href','/assets/css/articleStyles.css')
                            }
                        }

                        break;
    
                    // about me preview
                    case 'aboutHomepagePreview':
                        // homepage self description
                        fieldContent = `<br><span class="notThatSmall">${translation}</span>`;

                        // add stuff to object
                        $(`#${fieldId}`).html(fieldContent)

                        break;
                    
                    // about me in CV page
                    case 'aboutMeDescription':
                        // homepage self description
                        aboutMeDescription = `<span>${translation}</span>`;

                        // add stuff to object
                        $(`#${fieldId}`).html(aboutMeDescription)

                        break;
    
                    // cool links preview
                    case 'coolLinksHomepagePreview':
                        // cool wikipedia links preview
                        fieldContent = `<br><span class="notThatSmall">${translation}</span><br><br>`;
                        let maxAmountOfLinks = 5;
                        let cnt = 0;
                        var wikipediaArticles = coolLinksContent['wikipedia'];
                        for (const name of Object.keys(wikipediaArticles).reverse()) {
                            // extract language of article
                            let articleLang = wikipediaArticles[name].slice(0,2);

                            // create article URL
                            let articleURL = `https://${articleLang}.${wikipediaBaseLink}${wikipediaArticles[name].slice(3)}`;

                            // append to article list html object
                            if (cnt < (maxAmountOfLinks-1)) {
                                fieldContent += `<a class="notThatSmall bp" href="${articleURL}">🔗 ${name}</a><br><br>`;
                            } else {
                                fieldContent += `<a class="notThatSmall bp" href="${articleURL}">🔗 ${name}</a><br>`;
                            }
                            
                            // increase counter
                            cnt += 1;
                            
                            // break if counter reaches 3
                            if (cnt >= maxAmountOfLinks) {break;}
                        }

                        // add stuff to object
                        $(`#${fieldId}`).html(fieldContent)

                        break;
    
    
                    // playlists preview
                    case 'playlistsHomepagePreview':
                        // set homepage playlists stuff
                        fieldContent = `<br><span class="notThatSmall">${translation}</span><br>`;

                        // creating homepage playlists list
                        for (const [name, page] of Object.entries(homepagePlaylist)) {
                            // construct playlist url
                            let playlistURL = `${baseSpotifyLink}${page}`;
                            // append to article list html object
                            fieldContent += `
                                <div class="column img__wrap">
                                    <a href="${playlistURL}"><br>
                                    <img class="playlistImages-hp" src="/assets/playlist_images/${name}.png" title="${name}">
                                        <div class="img__description_layer img__dl_hover_panel">
                                            <span class="img__description">${name}</span>
                                        </div>
                                    </a>
                                </div>
                            <br>`;
                        }

                        $(`#${fieldId}`).html(fieldContent)
                        break;
                }
    
            } else if (document.getElementById(fieldId) && itemType == 0) {
                // SITE TEXT FIELDS ---------------------------------------------------------------------------
                $(`#${fieldId}`).html(translation);
            }
        }

    }

    // loadArticles
    loadArticleList()
}

// links for the article MD files and article URL
function loadArticleList() {
    let artList = '';
    for (let i = 0; i < articleTag.length; i++) {
            // generate article URL
            let articleURL = `/blog/${articleTag[i]}/`;
    
            // append to article list html object
            artList += `
            <div>
                <span class="articleTopInfo">${articleDates[i]} - ${articleLang[i]}</span>
                <br> 
                <a onmouseenter="setBlogIcon('${articleEmoji[i]}')" onmouseleave="removeBlogIcon()" class="c" href="${articleURL}">${articleEmoji[i]} ${articleTitles[i]}</a> 
            </div>`;

            // append line breaks
            artList += '<br><br>'
        }
    
        // appending the list of articles
        $("#articleList").html(artList);
}

// detecting the language to abstract language-based links
function updateLang(l) {
    setCookie('language',l)
    language = l;

    // reload all objectes
    allFiles.done(() => {
        // load all site objects specified the langs.json file
        loadObjects(langs)

        // if on projects page
        if (document.getElementById("projectsTitleBar")) {
            updateProjectsList()
        } else if (document.getElementById("aboutMeTitleBar")) {
            loadCV(l)
        }
    })
}

// change theme
function changeTheme() {
    // translation lang for changing language
    if (getCookie('theme') == 0) {
        setCookie('theme',1)
        $("#themeSwitcher").html(`<a class='lt lts' onclick='changeTheme()'>☀️</a>`)
        $("#mainStylesheet").attr('href','/assets/css/styles.css')

        // for articles
        if (document.getElementById('articleStylesheet')) {
            $("#articleStylesheet").attr('href','/assets/css/articleStyles.css')
        }
    } else {
        setCookie('theme',0)
        $("#themeSwitcher").html(`<a class='dt dts' onclick='changeTheme()'>🌒</a>`)
        $("#mainStylesheet").attr('href','/assets/css/styles-light.css')

        // for articles
        if (document.getElementById('articleStylesheet')) {
            $("#articleStylesheet").attr('href','/assets/css/articleStyles-light.css')
        }
    }
}

// show lang text on right col
function toggleLangText(l, event) {
    // depending on width, show lang popup or not
    langsJSON.done(() => {
        // get name of current language
        let currentLangName = langs['content']['language_names'][l];
        // add it to the langname lil thingy
        $("#langName").html(currentLangName)
        $("#langName").toggle()
    })

    // preview the language on mouse entry
    if (l != language) {
        if (event===1) {
            allFiles.done(() => {
                // reload objects with hover lang
                loadObjects(langs, l)
                // if on projects page
                if (document.getElementById("projectsTitleBar")) {
                // if on cv page
                    updateProjectsList(l)
                } else if (document.getElementById("aboutMeTitleBar")) {
                    loadCV(l)
                }
            })
        // go back to normal on mouse exit
        } else {
            allFiles.done(() => {
                // reload objects back with original lang
                loadObjects(langs, language)
                // if on projects page
                if (document.getElementById("projectsTitleBar")) {
                    updateProjectsList(language)
                // if on cv page
                } else if (document.getElementById("aboutMeTitleBar")) {
                    loadCV(language)
                }
            })
        }
    }
}

// function to change blog icon (fun stuff)
function setBlogIcon(icon) {
    allFiles.done(() => {
        if (document.getElementById('blogTitle')) {
            $("#blogTitle").html($("#blogTitle").html().replace('🗒️',icon))
        } else if (document.getElementById('blogHomepageLink')) {
            $("#blogHomepageLi").attr('data-before',icon)
        }
    })
}
function removeBlogIcon() {
    allFiles.done(() => {
        loadObjects(langs)

        // restore li icon if it exists
        if (document.getElementById('blogHomepageLi')) {
            $("#blogHomepageLi").attr('data-before','🗒️')
        }
    })
}

// LOAD ALL OBJECTS -------------------------------------
allFiles.done(() => {
    loadObjects(langs)
})

// ADD HOMEPAGE EVENTS ----------------------------------
var expandedItems = [];
// ID of items to add events to
function addHomepageExpandEvents() {
    let itemsToAddEventsTo = {
        'aboutExpandPreview':'aboutHomepagePreview',
        'coolLinksExpandPreview':'coolLinksHomepagePreview',
        'playlistsExpandPreview':'playlistsHomepagePreview',
    }
    let itemsExpandedName = {
        'aboutExpandPreview':'about',
        'coolLinksExpandPreview':'cool_links',
        'playlistsExpandPreview':'playlists',
    }

    // adding events
    for (const [expander, prevToggle] of Object.entries(itemsToAddEventsTo)) {
        // add click event listeners if the element exists
        if (document.getElementById(expander)) {
            $(`#${expander}`).click(function() {
                $(`#${prevToggle}`).toggle()
                // switch plus to minus and vice versa on toggle
                if ($(`#${expander}`).html() === '⊖') {
                    $(`#${expander}`).html('⊕')
                    // remove from expanded list
                    expandedItems = expandedItems.filter(function(val){ 
                        return val != itemsExpandedName[expander]; 
                    });
                } else {
                    $(`#${expander}`).html('⊖')
                    // add to expanded list
                    expandedItems.push(itemsExpandedName[expander])
                }
            });
        }
    }
}
// add the events on load
addHomepageExpandEvents()
