// changing visible site title based on locale 
var linksTitle
switch(browserLocale) {
    case 'es':
        linksTitle = 'links cool'
        break;
    case 'en':
        linksTitle = 'cool links'
        break;
    case 'nl':
        linksTitle = 'coole links'
}

// setting h1 title
document.getElementById("linksTitle").innerHTML = `<h3>⛓️ ${linksTitle}</h3>`

// base link
const wikipediaBaseLink = 'wikipedia.org/wiki/';
const wiktionaryBaseLink = 'wiktionary.org/wiki/';

// links
$.getJSON('/cool_links/links/links.json', (links) => {

    // ------------------------------------------ WIKIPEDIA
    // generate wikipedia link list
    var wikipediaArticles = links['wikipedia']; 
    var artList = '<ul>';
    for (const name of Object.keys(wikipediaArticles).reverse()) {
        // extract language of article
        let articleLang = wikipediaArticles[name].slice(0,2);

        // create article URL
        var articleURL = `https://${articleLang}.${wikipediaBaseLink}${wikipediaArticles[name].slice(3)}` 

        // append to article list html object
        artList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br><br>`;
    }
    artList += '</ul><hr>';

    // appending the list of articles
    if (document.getElementById("wikipediaLinkList")) {
        document.getElementById("wikipediaLinkList").innerHTML = artList;
    }

    // ------------------------------------------ WIKTIONARY
    // generate wiktionary link list
    var wiktionaryArticles = links['wiktionary'];
    var artList = '<ul>';
    for (const name of Object.keys(wiktionaryArticles).reverse()) {
        // extract language of article
        let articleLang = wiktionaryArticles[name].slice(0,2);

        // create article URL
        var articleURL = `https://${articleLang}.${wiktionaryBaseLink}${wiktionaryArticles[name].slice(3)}` 

        // append to article list html object
        artList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br><br>`;
    }
    artList += '</ul><hr>';

    // appending the list of articles
    if (document.getElementById("wiktionaryLinkList")) {
        document.getElementById("wiktionaryLinkList").innerHTML = artList;
    }

    // ------------------------------------------ ANYTHING ELSE
    // generate wiktionary link list
    var wiktionaryArticles = links['other_sites'];
    var artList = '<ul>';
    for (const name of Object.keys(wiktionaryArticles).reverse()) {
        // create article URL
        var articleURL = wiktionaryArticles[name] 

        // append to article list html object
        artList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br><br>`;
    }
    artList += '</ul><hr>';

    // appending the list of articles
    if (document.getElementById("otherSitesLinkList")) {
        document.getElementById("otherSitesLinkList").innerHTML = artList;
    }

})
