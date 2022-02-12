// blog links
var blog = 'https://dac.ac/blog/';
let art_path = window.location.href.split("/");
art_path = art_path[art_path.length - 2];
var art_md_path = `/blog/${art_path}/article.md`;

// lists of article info
var articleDates = [
    '10/02/2022',
    '23/01/2021',
    '16/11/2020',
    '14/11/2020',
    '13/10/2020'
];
var articleTitles = [
    'Useful NFTs?',
    'My switch (back) to linux as primary OS in 2020',
    'How to set up a Data Science environment on Windows using Visual Studio Code',
    'How a staple of Dominican cuisine, plantains, have helped me manage my Crohn’s Disease',
    'Como invertir en bienes raíces utilizando RealT y blockchain'
];
var articleTag = [
    'useful_nfts',
    'linux_2020',
    'vs_code_windows',
    'plantains',
    'tutorial_realt'
];
var articleEmoji = [
    '🖼️',
    '💽',
    '🖥️',
    '🇩🇴',
    '🏘️'
];

// links for the article MD files and article URL
var artList = '<ul>';
for (let i = 0; i <= articleTag.length-1; i++) {
    // generate article URL
    let articleURL = `https://dac.ac/blog/${articleTag[i]}/`;

    // append to article list html object
    artList += `<span>${articleEmoji[i]}</span> - <span class="ad">${articleDates[i]}</span> - <a class="c" href="${articleURL}">${articleTitles[i]}</a><br><br>`;
}
artList += '</ul><hr>';

// appending the list of articles
document.getElementById("articleList").innerHTML = artList;
