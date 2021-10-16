// article titles
var articleTitles = [
    'Historical mongolian naval forces',
    'List of ongoing armed conflicts',
    'Mexican drug war',
    'List of people who disappeared (list of lists basically)',
    'Ratlines (World War II aftermath)',
    'Human Development Index',
    'List of doping cases in athletics',
    'Privacy concerns regarding Google',
    'Privacy concerns with Facebook',
    'Religion in Suriname',
    'Spanish Guinea',
    'Purely functional programming',
    'Kalmykia',
    'Almaty',
    'Hong Kong Basic Law',
    'The White Stripes',
    'Hungarian language'
];

// links
var articleURL = [
    'https://en.wikipedia.org/wiki/Mongolian_Armed_Forces#Historical_Mongolian_naval_forces',
    'https://en.wikipedia.org/wiki/List_of_ongoing_armed_conflicts',
    'https://en.wikipedia.org/wiki/Mexican_drug_war',
    'https://en.wikipedia.org/wiki/Lists_of_people_who_disappeared',
    'https://en.wikipedia.org/wiki/Ratlines_(World_War_II_aftermath)',
    'https://en.wikipedia.org/wiki/Human_Development_Index',
    'https://en.wikipedia.org/wiki/List_of_doping_cases_in_athletics',
    'https://en.wikipedia.org/wiki/Privacy_concerns_regarding_Google',
    'https://en.wikipedia.org/wiki/Privacy_concerns_with_Facebook',
    'https://en.wikipedia.org/wiki/Religion_in_Suriname',
    'https://en.wikipedia.org/wiki/Spanish_Guinea',
    'https://en.wikipedia.org/wiki/Purely_functional_programming',
    'https://en.wikipedia.org/wiki/Kalmykia',
    'https://en.wikipedia.org/wiki/Almaty',
    'https://en.wikipedia.org/wiki/Hong_Kong_Basic_Law',
    'https://en.wikipedia.org/wiki/The_White_Stripes',
    'https://en.wikipedia.org/wiki/Hungarian_language'
];

// links for the article MD files and article URL
var artList = '<ul>';
for (let i = 0; i <= articleTitles.length-1; i++) {
    // append to article list html object
    artList += `<span>🔗</span> <a class="b" href="${articleURL[i]}">${articleTitles[i]}</a><br><br>`;
}
artList += '</ul><hr>';

// appending the list of articles
document.getElementById("wikipediaLinkList").innerHTML = artList;
