// GENERAL STUFF ------------ links to all the profiles + email
var linkedin = 'https://www.linkedin.com/in/dreth/';
var github = 'https://github.com/dreth';
var blog = '/blog/';
var about = '/about/';
var home = '/';
var status = '/status';
var cool_links = '/cool_links';
var playlists = '/playlists';
var email = 'mailto:contact@m.dac.ac';
var language;
var darkThemeLabel;
var lightThemeLabel;

// homepage previews
var homepageArticleList;
var homepagePlaylistList;
var homepageCoolLinkList;
var homepageSelfDescription;

// base links
const baseSpotifyLink = 'https://open.spotify.com/playlist/';
const wikipediaBaseLink = 'wikipedia.org/wiki/';
const wiktionaryBaseLink = 'wiktionary.org/wiki/';

// HIDING STUFF THAT STARTS HIDDEN ---------------
// hide article preview list
$("#homepageArticlePreview").toggle()
// hide homepage playlists preview
$("#homepagePlaylistPreview").toggle()
// hide homepage links preview
$("#homepageCoolLinkPreview").toggle()
// schakelaar voor startpagina "over mij" sectie
$("#homepageAboutMePreview").toggle()
// hide lang name
$("#langName").toggle()
// add notepad to blog link li
$("#blogHomepageLi").attr('data-before','🗒️')

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

// ALL FILES LOADED?
allFiles = $.when(langsJSON, articlesJSON, playlistsJSON, coolLinksJSON);

// COOKIES ---------------------------------------
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // expire in a year
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

// generate menus
function loadObjects(langsObj) {
    // loop over fields
    for (const [itemType, items] of Object.entries(langsObj["objectIds_Field"])) {

        // check if field is actually in the page before doing anything
        for (const [fieldId, content] of Object.entries(items)) {
            // get translation
            translation = langsObj["content"][content][language]

            // loop over items
            if (document.getElementById(fieldId) && itemType == 2) {
                // PAGE TITLES ------------------------------------------------------------------------------
                $(`#${fieldId}`).html(`${translation} | Daniel A.`);

            } else if (document.getElementById(fieldId) && itemType == 1) {
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
                    case 'homepageAboutMePreview':
                        // homepage self description
                        homepageSelfDescription = `<br><span>${translation}</span>`;

                        // add stuff to object
                        $("#homepageAboutMePreview").html(homepageSelfDescription)

                        break;
                    
                    // about me in CV page
                    case 'aboutMeDescription':
                        // homepage self description
                        aboutMeDescription = `<span>${translation}</span>`;

                        // add stuff to object
                        $("#aboutMeDescription").html(aboutMeDescription)

                        break;
    
    
                    // blog preview
                    case 'homepageArticlePreview':
                        // latest three articles
                        homepageArticleList = `<br><span>${translation}</span><br><br>`;
                        for (let i = 0; i <= articleTag.slice(0,3).length-1; i++) {
                            // generate article URL
                            let articleURL = `https://dac.ac/blog/${articleTag[i]}/`;
    
                            // append to article list html object
                            homepageArticleList += `<div><span class="articleTopInfo">${articleDates[i]} - ${articleLang[i]}</span><br><a onmouseenter="setBlogIcon('${articleEmoji[i]}')" onmouseleave="removeBlogIcon()" class="c" href="${articleURL}">${articleEmoji[i]} ${articleTitles[i]}</a></div><br>`;
                        }

                        // add stuff to object
                        $("#homepageArticlePreview").html(homepageArticleList)

                        break;
    
    
                    // cool links preview
                    case 'homepageCoolLinkPreview':
                        // cool wikipedia links preview
                        homepageCoolLinkList = `<br><span>${translation}</span><br><br>`;
                        let cnt = 0;
                        var wikipediaArticles = coolLinksContent['wikipedia'];
                        for (const name of Object.keys(wikipediaArticles).reverse()) {
                            // extract language of article
                            let articleLang = wikipediaArticles[name].slice(0,2);

                            // create article URL
                            let articleURL = `https://${articleLang}.${wikipediaBaseLink}${wikipediaArticles[name].slice(3)}`;

                            // append to article list html object
                            if (cnt < 2) {
                                homepageCoolLinkList += `<span>🔗</span> <a class="bp" href="${articleURL}">${name}</a><br><br>`;
                            } else {
                                homepageCoolLinkList += `<span>🔗</span> <a class="bp" href="${articleURL}">${name}</a><br>`;
                            }
                            
                            // increase counter
                            cnt += 1;
                            
                            // break if counter reaches 3
                            if (cnt >= 3) {break;}
                        }

                        // add stuff to object
                        $("#homepageCoolLinkPreview").html(homepageCoolLinkList)

                        break;
    
    
                    // playlists preview
                    case 'homepagePlaylistPreview':
                        // set homepage playlists stuff
                        homepagePlaylistList = `<br><span>${translation}</span><br><br>`;

                        // creating homepage playlists list
                        for (const [name, page] of Object.entries(homepagePlaylist)) {
                            // append to article list html object
                            homepagePlaylistList += `<a class="p" href="${baseSpotifyLink}${page}">${name}<br><img class="playlistImages" src="/assets/playlist_images/${name}.png"></a><br>`;
                        }

                        $('#homepagePlaylistPreview').html(homepagePlaylistList)
                        break;
                }
    
            } else if (document.getElementById(fieldId) && itemType == 0) {
                // SITE TEXT FIELDS ---------------------------------------------------------------------------
                $(`#${fieldId}`).html(translation);
            }
        }

    }
}

// detecting the language to abstract language-based links
function updateLang(l) {
    setCookie('language',l)
    language = l;

    // reload all objectes
    allFiles.done(() => {
        loadObjects(langs)
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
function toggleLangText(l) {
    if ($(window).width() > 450) {
        langsJSON.done(() => {
            // get name of current language
            let currentLangName = langs['content']['language_names'][l];
            // add it to the langname lil thingy
            $("#langName").html(currentLangName)
            $("#langName").toggle()
        })
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
// ID of items to add events to
itemsToAddEventsTo = {
    'expandAboutMePreview':'homepageAboutMePreview',
    'expandBlogPreview':'homepageArticlePreview',
    'expandCoolLinksPreview':'homepageCoolLinkPreview',
    'expandPlaylistsPreview':'homepagePlaylistPreview'
}

// adding events
for (const [expander, prevToggle] of Object.entries(itemsToAddEventsTo)) {
    if (document.getElementById(expander)) {
        // show or hide blog preview
        $(`#${expander}`).click(function() {
            $(`#${prevToggle}`).toggle()
            if ($(`#${expander}`).html() === '⊖') {
                $(`#${expander}`).html('⊕')
            } else {
                $(`#${expander}`).html('⊖')
            }
        });
    }
}