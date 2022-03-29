// random link mode
var randomLinkMode = 0;

// hide random link stuff
$("#randomLinksTitle").toggle()
$("#randomLinkBrowser").toggle()
$("#goToRandomLinkTitle").toggle()

// links
coolLinksJSON.done(() => {

    // ------------------------------------------ WIKIPEDIA
    // generate wikipedia link list
    var wikipediaArticles = coolLinksContent['wikipedia']; 
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
    var wiktionaryArticles = coolLinksContent['wiktionary'];
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
    var wiktionaryArticles = coolLinksContent['other_sites'];
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

// Random link browser function
function randomLinkButtonLoader() {
    if (randomLinkMode == 0) {
        $("#randomLinkSwitcher").html(`<a class='lt lts' onclick='randomLinkSwitch()'>🔄</a>`)
    } else {
        $("#randomLinkSwitcher").html(`<a class='lt lts' onclick='randomLinkSwitch()'>⛓️</a>`)
    }
}

// random link switch
function randomLinkSwitch() {
    // switch mode
    randomLinkMode = randomLinkMode == 0 ? 1 : 0;
    // reload button
    randomLinkButtonLoader()
    // change section of the site to show randomlink browser
    if (randomLinkMode == 0) {
        // all toggles to show the other section
        $("#randomLinksTitle").toggle()
        $("#linksTitle").toggle()
        $("#randomLinkBrowser").toggle()
        $("#linksBlock").toggle()
        $("#goToRandomLinkTitle").toggle()
        // make hr padded
        $("#coolLinksMiddleHR").attr('class','paddedBody')
    } else {
        // all toggles to show the other section
        $("#randomLinksTitle").toggle()
        $("#linksTitle").toggle()
        $("#randomLinkBrowser").toggle()
        $("#linksBlock").toggle()
        $("#goToRandomLinkTitle").toggle()
        // make hr NOT padded
        $("#coolLinksMiddleHR").attr('class','fullBody')
    }
}

// go to random link
function goToRandomLink() {
    // randomly select a link
    
}

// run random link button loader
randomLinkButtonLoader()
