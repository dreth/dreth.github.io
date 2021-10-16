// base link
const wiktionaryBaseLink = 'https://en.wiktionary.org/wiki/';

// links
var wiktionaryArticles = {
    'ja':'ja'
};

// links for the article MD files and article URL
var artList = '<ul>';
for (const [name, page] of Object.entries(wiktionaryArticles)) {
    // create article URL
    var articleURL = `${wiktionaryBaseLink}${page}` 

    // append to article list html object
    artList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br><br>`;
}
artList += '</ul><hr>';

// appending the list of articles
document.getElementById("wiktionaryLinkList").innerHTML = artList;
