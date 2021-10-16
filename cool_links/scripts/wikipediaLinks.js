// base link
const wikipediaBaseLink = 'https://en.wikipedia.org/wiki/';

// links
var wikipediaArticles = {
    'Historical mongolian naval forces':'Mongolian_Armed_Forces#Historical_Mongolian_naval_forces',
    'List of ongoing armed conflicts':'List_of_ongoing_armed_conflicts',
    'Mexican drug war':'Mexican_drug_war',
    'List of people who disappeared (list of lists basically)':'Lists_of_people_who_disappeared',
    'Ratlines (World War II aftermath)':'Ratlines_(World_War_II_aftermath)',
    'Human Development Index':'Human_Development_Index',
    'List of doping cases in athletics':'List_of_doping_cases_in_athletics',
    'Privacy concerns regarding Google':'Privacy_concerns_regarding_Google',
    'Privacy concerns with Facebook':'Privacy_concerns_with_Facebook',
    'Religion in Suriname':'Religion_in_Suriname',
    'Spanish Guinea':'Spanish_Guinea',
    'Purely functional programming':'Purely_functional_programming',
    'Kalmykia':'Kalmykia',
    'Almaty':'Almaty',
    'Hong Kong Basic Law':'Hong_Kong_Basic_Law',
    'The White Stripes':'The_White_Stripes',
    'Hungarian language':'Hungarian_language',
    'Wirecard Scandal':'Wirecard_scandal'
};

// links for the article MD files and article URL
var artList = '<ul>';
for (const [name, page] of Object.entries(wikipediaArticles)) {
    // create article URL
    var articleURL = `${wikipediaBaseLink}${page}` 

    // append to article list html object
    artList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br><br>`;
}
artList += '</ul><hr>';

// appending the list of articles
document.getElementById("wikipediaLinkList").innerHTML = artList;
