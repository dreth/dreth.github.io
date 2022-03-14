// links to all the profiles + email
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


// detecting the language to abstract language-based links
let url_lang = window.location.href.split("/");
url_lang = url_lang[url_lang.length - 2];
if (url_lang == 'nl') {
    var lang = 'en';
} else {
    var lang = url_lang;
}
// language-based links
var about = `${home}/about/${lang}`;
var home_lang = `${home}/${lang}`;

// check user locale to redirect to ideal language
if (navigator.language.includes('es')) {
    var browserLocale = 'es'
} else if (navigator.language.includes('nl')) {
    var browserLocale = 'nl'
} else {
    var browserLocale = 'en'
}
// final redirect URL
var visit_redirect = `${home}/${browserLocale}`;

//  site favicon
var link = document.getElementById('icon');
link.href = `/assets/icons/icon.ico`;

// cookies
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // expire in a year
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';SameSite=Lax' + ';path=/';
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

// arrangement of light theme link
if (getCookie('dac.ac-theme') == 0) {
    $("#themeSwitcher").html("<a class='dt' onclick='changeTheme()'>🌑 dark</a>")
    $("#mainStylesheet").attr('href','/styles-light.css')

    // for articles
    if (document.getElementById('articleStylesheet')) {
        $("#articleStylesheet").attr('href','/blog/articleStyles-light.css')
    }
} else {
    $("#themeSwitcher").html("<a class='lt' onclick='changeTheme()'>☀️ light</a>")
    $("#mainStylesheet").attr('href','/styles.css')

    // for articles
    if (document.getElementById('articleStylesheet')) {
        $("#articleStylesheet").attr('href','/blog/articleStyles.css')
    }
}

// change theme
function changeTheme() {
    if (getCookie('dac.ac-theme') == 0) {
        setCookie('dac.ac-theme',1)
        $("#themeSwitcher").html("<a class='lt' onclick='changeTheme()'>☀️ light</a>")
        $("#mainStylesheet").attr('href','/styles.css')

        // for articles
        if (document.getElementById('articleStylesheet')) {
            $("#articleStylesheet").attr('href','/blog/articleStyles.css')
        }
    } else {
        setCookie('dac.ac-theme',0)
        $("#themeSwitcher").html("<a class='dt' onclick='changeTheme()'>🌑 dark</a>")
        $("#mainStylesheet").attr('href','/styles-light.css')

        // for articles
        if (document.getElementById('articleStylesheet')) {
            $("#articleStylesheet").attr('href','/blog/articleStyles-light.css')
        }
    }
}
