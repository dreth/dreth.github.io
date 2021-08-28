// links to all the profiles + email
var linkedin = 'https://dac.ac/p/linkedin';
var github = 'https://dac.ac/p/github';
var blog = 'https://dac.ac/p/blog';
var home = 'https://dac.ac';
var status = 'https://dac.ac/status';
var email = 'mailto:contact@dac.ac';
// detecting the language to abstract language-based links
let url_lang = window.location.href.split("/");
url_lang = url_lang[url_lang.length - 1];
if (url_lang == 'nl') {
    var lang = 'en';
} else {
    var lang = url_lang;
}
// language-based links
var cv = `${home}/cv/${lang}`;
var home_lang = `${home}/${lang}`;