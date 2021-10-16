// article titles
var articleTitles = [
    'Historical mongolian naval forces'
];

// links
var articleURL = [
    'https://en.wikipedia.org/wiki/Mongolian_Armed_Forces#Historical_Mongolian_naval_forces'
];

// links for the article MD files and article URL
var artList = '<ul>';
for (let i = 0; i <= articleTitles.length-1; i++) {
    // append to article list html object
    artList += `<span>🔗</span> - <a class="b" href="${articleURL[i]}">${articleTitles[i]}</a><br><br>`;
}
artList += '</ul><hr>';

// appending the list of articles
document.getElementById("wikipediaLinkList").innerHTML = artList;

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
document.getElementById("linksTitle").innerHTML = `<h1>⛓️ ${linksTitle}</h1>`
