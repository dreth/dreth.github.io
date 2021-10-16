// article titles
var articleTitles = [
    'ja'
];

// links
var articleURL = [
    'https://en.wiktionary.org/wiki/ja'
];

// links for the article MD files and article URL
var artList = '<ul>';
for (let i = 0; i <= articleTitles.length-1; i++) {
    // append to article list html object
    artList += `<span>🔗</span> <a class="b" href="${articleURL[i]}">${articleTitles[i]}</a><br><br>`;
}
artList += '</ul><hr>';

// appending the list of articles
document.getElementById("wiktionaryLinkList").innerHTML = artList;
