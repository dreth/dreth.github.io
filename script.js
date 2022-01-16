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
url_lang = url_lang[url_lang.length - 1];
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
document.head = document.head || document.getElementsByTagName('head')[0];
// directory levels for favicon
var faviconLevel = parseInt(document.getElementById('icon').getAttribute("note"));
var link = document.getElementById('icon');
link.href = `${'../'.repeat(faviconLevel)}assets/icons/icon.ico`;
