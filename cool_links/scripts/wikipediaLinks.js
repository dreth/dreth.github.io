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
    'Wirecard Scandal':'Wirecard_scandal',
    'List of time zones by country':'List_of_time_zones_by_country',
    'Tajik language':'Tajik_language',
    'Demographics of Chile':'Demographics_of_Chile',
    'Fase fashion':'Fast_fashion',
    'Hanseatic League':'Hanseatic_League',
    'Asexuality':'Asexuality',
    'Honey badger':'Honey_badger',
    'Sifan Hassan':'Sifan_Hassan',
    'IJsselmeer':'IJsselmeer',
    'Chavacano':'Chavacano',
    'Ghent':'Ghent',
    'Textile industry in Bangladesh':'Textile_industry_in_Bangladesh',
    'Sino-German cooperation 1926-1941':'Sino-German_cooperation_%281926%E2%80%931941%29',
    'Second Cold War':'Second_Cold_War',
    'Japanese Brazilians':'Japanese_Brazilians',
    'Spanish language in the Philippines':'Spanish_language_in_the_Philippines',
    'Norwegian Antarctic Expedition':'Norwegian_Antarctic_Expedition',
    'Kentucky Bend':'Kentucky_Bend',
    'Kazakhstan man-in-the-middle attack':'Kazakhstan_man-in-the-middle_attack',
    'Smooth newt':'Smooth_newt',
    'Rough-skinned newt':'Rough-skinned_newt',
    'List of UEFA Champions League hat':'List_of_UEFA_Champions_League_hat'
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
