// base link
const wikipediaBaseLink = 'wikipedia.org/wiki/';

// links
var wikipediaArticles = {
    'Historical mongolian naval forces':'EN_Mongolian_Armed_Forces#Historical_Mongolian_naval_forces',
    'List of ongoing armed conflicts':'EN_List_of_ongoing_armed_conflicts',
    'Mexican drug war':'EN_Mexican_drug_war',
    'List of people who disappeared (list of lists basically)':'EN_Lists_of_people_who_disappeared',
    'Ratlines (World War II aftermath)':'EN_Ratlines_(World_War_II_aftermath)',
    'Human Development Index':'EN_Human_Development_Index',
    'List of doping cases in athletics':'EN_List_of_doping_cases_in_athletics',
    'Privacy concerns regarding Google':'EN_Privacy_concerns_regarding_Google',
    'Privacy concerns with Facebook':'EN_Privacy_concerns_with_Facebook',
    'Religion in Suriname':'EN_Religion_in_Suriname',
    'Spanish Guinea':'EN_Spanish_Guinea',
    'Purely functional programming':'EN_Purely_functional_programming',
    'Kalmykia':'EN_Kalmykia',
    'Almaty':'EN_Almaty',
    'Hong Kong Basic Law':'EN_Hong_Kong_Basic_Law',
    'The White Stripes':'EN_The_White_Stripes',
    'Hungarian language':'EN_Hungarian_language',
    'Wirecard Scandal':'EN_Wirecard_scandal',
    'List of time zones by country':'EN_List_of_time_zones_by_country',
    'Tajik language':'EN_Tajik_language',
    'Demographics of Chile':'EN_Demographics_of_Chile',
    'Fase fashion':'EN_Fast_fashion',
    'Hanseatic League':'EN_Hanseatic_League',
    'Asexuality':'EN_Asexuality',
    'Honey badger':'EN_Honey_badger',
    'Sifan Hassan':'EN_Sifan_Hassan',
    'IJsselmeer':'EN_IJsselmeer',
    'Chavacano':'EN_Chavacano',
    'Ghent':'EN_Ghent',
    'Textile industry in Bangladesh':'EN_Textile_industry_in_Bangladesh',
    'Sino-German cooperation 1926-1941':'EN_Sino-German_cooperation_%281926%E2%80%931941%29',
    'Second Cold War':'EN_Second_Cold_War',
    'Japanese Brazilians':'EN_Japanese_Brazilians',
    'Spanish language in the Philippines':'EN_Spanish_language_in_the_Philippines',
    'Norwegian Antarctic Expedition':'EN_Norwegian_Antarctic_Expedition',
    'Kentucky Bend':'EN_Kentucky_Bend',
    'Kazakhstan man-in-the-middle attack':'EN_Kazakhstan_man-in-the-middle_attack',
    'Smooth newt':'EN_Smooth_newt',
    'Rough-skinned newt':'EN_Rough-skinned_newt',
    'List of UEFA Champions League hat-tricks':'EN_List_of_UEFA_Champions_League_hat-tricks',
    'Roy Sullivan':'EN_Roy_Sullivan',
    'My Way killings':'EN_My_Way_killings',
    'Corporate Memphis':'EN_Corporate_Memphis',
    'Optimism bias':'EN_Optimism_bias',
    'Neomugicha incident':'EN_Neomugicha_incident',
    '1815 eruption of Mount Tambora':'EN_1815_eruption_of_Mount_Tambora',
    'Year Without a Summer':'EN_Year_Without_a_Summer',
    'Jón Steingrímsson':'DE_Jón_Steingrímsson',
    'Banned gymnastics skills':'EN_Banned_gymnastics_skills',
    "List of Grand Slam men's singles champions":"EN_List_of_Grand_Slam_men's_singles_champions",
    'List of national animals':'EN_List_of_national_animals',
    'List of countries and dependencies by area':"EN_List_of_countries_and_dependencies_by_area",
    'Indonesia and the United Nations':"EN_Indonesia_and_the_United_Nations",
    'Indonesian mass killings of 1965–66':"EN_Indonesian_mass_killings_of_1965%E2%80%9366",
    'Sukarno':"EN_Sukarno",
    'Suharto':"EN_Suharto",
    'German bombing of Rotterdam':"EN_German_bombing_of_Rotterdam",
    'Hubert Pierlot':"EN_Hubert_Pierlot",
    'Leopold III of Belgium':"EN_Leopold_III_of_Belgium",
    'Dissolution of the union between Norway and Sweden':"EN_Dissolution_of_the_union_between_Norway_and_Sweden",
    '1905 Norwegian union dissolution referendum':"EN_1905_Norwegian_union_dissolution_referendum",
    'Swedish–Norwegian War (1814)':"EN_Swedish%E2%80%93Norwegian_War_(1814)",
    'Kingdom of Ireland':"EN_Kingdom_of_Ireland",
    'Acts of Union 1800':"EN_Acts_of_Union_1800",
    'Union Jack':"EN_Union_Jack",
    'Sister city':"EN_Sister_city",
    'List of most expensive paintings':"EN_List_of_most_expensive_paintings",
    'São Paulo':"EN_S%C3%A3o_Paulo",
    'United Kingdom of Portugal, Brazil and the Algarves':"EN_United_Kingdom_of_Portugal,_Brazil_and_the_Algarves",
    'First Mexican Empire':"EN_First_Mexican_Empire",
    'Yingluck cabinet':"EN_Yingluck_cabinet",
    '2013–2014 Thai political crisis':"EN_2013%E2%80%932014_Thai_political_crisis",
    'French invasion of Russia':"EN_French_invasion_of_Russia",
    'Congress of Vienna':"EN_Congress_of_Vienna",
    'German Confederation':"EN_German_Confederation",
    'List of countries by military expenditures':"EN_List_of_countries_by_military_expenditures",
    'List of glaciers in Russia':"EN_List_of_glaciers_in_Russia",
    'Belt and Road Initiative':"EN_Belt_and_Road_Initiative",
    'Economy of Mauritius':"EN_Economy_of_Mauritius",
    'Asian Infrastructure Investment Bank':"EN_Asian_Infrastructure_Investment_Bank",
    'Dialect continuum':"EN_Dialect_continuum",
    'Northern Sea Route':"EN_Northern_Sea_Route",
    'Goalscoring goalkeepers':"EN_Goalscoring_goalkeepers"
};

// generate wikipedia link list
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
