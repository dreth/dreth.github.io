// base link
const wiktionaryBaseLink = 'https://en.wiktionary.org/wiki/';

// links
var wiktionaryArticles = {
    'ja':'ja',
    'jordgubbe':'jordgubbe',
    'garish':'garish'
};

// links for the article MD files and article URL
var artList = '<ul>';
for (const name of Object.keys(wiktionaryArticles).reverse()) {
    // create article URL
    var articleURL = `${wiktionaryBaseLink}${wiktionaryArticles[name]}` 

    // append to article list html object
    artList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br><br>`;
}
artList += '</ul><hr>';

// appending the list of articles
document.getElementById("wiktionaryLinkList").innerHTML = artList;
