// GENERAL STUFF ------------ links to all the profiles + email
var linkedin = 'https://www.linkedin.com/in/dreth/';
var github = 'https://github.com/dreth';
var blog = 'https://dac.ac/blog/';
var home = 'https://dac.ac';
var status = 'https://dac.ac/status';
var cool_links = 'https://dac.ac/cool_links';
var playlists = 'https://dac.ac/playlists';
var email = 'mailto:contact@m.dac.ac';
var about_en = 'https://dac.ac/about/en';
var about_es = 'https://dac.ac/about/es';
var language;
var darkThemeLabel;
var lightThemeLabel;

// homepage previews
var homepageArticleList;
var homepagePlaylistList;

// base links
const baseSpotifyLink = 'https://open.spotify.com/playlist/';
const wikipediaBaseLink = 'wikipedia.org/wiki/';
const wiktionaryBaseLink = 'wiktionary.org/wiki/';

// HIDING STUFF THAT STARTS HIDDEN ---------------
// hide article preview list
$("#homepageArticlePreview").toggle()
// hide homepage playlists preview
$("#homepagePlaylistPreview").toggle()

// LANGUAGES -------------- get languages and labels
var langsJSON = $.getJSON('/data/languages.json');
var langs; 

langsJSON.done(langsJSON, (langsData) => {
    langs = langsData;
})

// BLOG STUFF -------------- lists of article info
var articlesJSON = $.getJSON('/data/articles.json');
var articleDates;
var articleTitles;
var articleTag;
var articleEmoji;

articlesJSON.done(articlesJSON, (articleData) => {
    articleDates = articleData["articleDates"];
    articleTitles = articleData["articleTitles"];
    articleTag = articleData["articleTag"];
    articleEmoji = articleData["articleEmoji"];
})

// PLAYLISTS STUFF -------- list playlists stuff
var playlistsJSON = $.getJSON('/data/playlists.json')
var playlistsContent;
var homepagePlaylist;

playlistsJSON.done(playlistsJSON, (playlistsData) => {
    playlistsContent = playlistsData["playlists"];
    homepagePlaylist = playlistsData["homepage_playlist"]
})

// ALL FILES LOADED?
allFiles = $.when(langsJSON,articlesJSON,playlistsJSON)

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
            if (document.getElementById(fieldId) && itemType == 1) {
                // special fields
                switch(fieldId) {
                    // theme switcher
                    case 'themeSwitcher':
                        // arrangement of theme link
                        if (getCookie('theme') == 0) {
                            $("#themeSwitcher").html(`<a class='dt' onclick='changeTheme()'>${translation['dark']}</a>`)
                            $("#mainStylesheet").attr('href','/styles-light.css')
                    
                            // for articles
                            if (document.getElementById('articleStylesheet')) {
                                $("#articleStylesheet").attr('href','/blog/articleStyles-light.css')
                            }
                        } else {
                            $("#themeSwitcher").html(`<a class='lt' onclick='changeTheme()'>${translation['light']}</a>`)
                            $("#mainStylesheet").attr('href','/styles.css')
                    
                            // for articles
                            if (document.getElementById('articleStylesheet')) {
                                $("#articleStylesheet").attr('href','/blog/articleStyles.css')
                            }
                        }

                        break;
    
                    // about me preview
                    case 'homepageAboutMePreview':
                        
                        break;
    
    
                    // blog preview
                    case 'homepageArticlePreview':
    
                        // latest three articles
                        homepageArticleList = `<br><span>${translation}</span><br><br>`;
                        for (let i = 0; i <= articleTag.slice(0,3).length-1; i++) {
                            // generate article URL
                            let articleURL = `https://dac.ac/blog/${articleTag[i]}/`;
    
                            // append to article list html object
                            homepageArticleList += `<span>${articleEmoji[i]}</span> - <span>${articleDates[i]}</span> - <a class="c" href="${articleURL}">${articleTitles[i]}</a><br><br>`;
                        }

                        // add stuff to object
                        $("#homepageArticlePreview").html(homepageArticleList)

                        break;
    
    
                    // cool links preview
                    case 'homepageCoolLinkPreview':
                        break;
    
    
                    // playlists preview
                    case 'homepagePlaylistPreview':
                        // set homepage playlists stuff
                        homepagePlaylistList = `<br><span>${translation}</span><br><br>`;

                        // creating homepage playlists list
                        for (const [name, page] of Object.entries(homepagePlaylist)) {
                            // append to article list html object
                            homepagePlaylistList += `<a class="p" href="${baseSpotifyLink}${page}">${name}<br><img class="playlistImages" src="/playlists/images/${name}.png"></a><br>`;
                        }

                        $('#homepagePlaylistPreview').html(homepagePlaylistList)
                        break;
                }
    
            } else if (document.getElementById(fieldId) && itemType == 0) {
                // add proper text to every id
                $(`#${fieldId}`).html(translation);
            }
        }

    }
}

// detecting the language to abstract language-based links
function updateLang(l) {
    setCookie('language',l)
    language = l;
    loadObjects(langs)
}

// change theme
function changeTheme() {
    // translation lang for changing language
    if (getCookie('theme') == 0) {
        setCookie('theme',1)
        $("#themeSwitcher").html(`<a class='lt' onclick='changeTheme()'>${langs["content"]["theme_lang"][language]['light']}</a>`)
        $("#mainStylesheet").attr('href','/styles.css')

        // for articles
        if (document.getElementById('articleStylesheet')) {
            $("#articleStylesheet").attr('href','/blog/articleStyles.css')
        }
    } else {
        setCookie('theme',0)
        $("#themeSwitcher").html(`<a class='dt' onclick='changeTheme()'>${langs["content"]["theme_lang"][language]['dark']}</a>`)
        $("#mainStylesheet").attr('href','/styles-light.css')

        // for articles
        if (document.getElementById('articleStylesheet')) {
            $("#articleStylesheet").attr('href','/blog/articleStyles-light.css')
        }
    }
}

// load objects
allFiles.done(() => {
    loadObjects(langs)
})


// ADD HOMEPAGE EVENTS -------------------------
// ID of items to add events to
itemsToAddEventsTo = {
    'expandBlogPreview':'homepageArticlePreview',
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
