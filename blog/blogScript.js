// blog links
var blog = 'https://dac.ac/blog/';
let art_path = window.location.href.split("/");
art_path = art_path[art_path.length - 2];
var art_md_path = `/blog/${art_path}/article.md`;
var art_draft_md_path = `/blog/drafts/${art_path}/article.md`;
// hide article preview list
$("#homepageArticlePreview").toggle()

// lists of article info
var articleDates = [
    '13/03/2022',
    '26/02/2022',
    '10/02/2022',
    '23/01/2021',
    '16/11/2020',
    '14/11/2020',
    '13/10/2020'
];
var articleTitles = [
    'Analyzing long-term investments in cryptocurrency projects',
    'Links and information resources on the 2022 Russian invasion of Ukraine. Слава Україні!',
    'Useful NFTs?',
    'My switch (back) to linux as primary OS in 2020',
    'How to set up a Data Science environment on Windows using Visual Studio Code',
    'How a staple of Dominican cuisine, plantains, have helped me manage my Crohn’s Disease',
    'Como invertir en bienes raíces utilizando RealT y blockchain'
];
var articleTag = [
    'evaluate_crypto_projects',
    'ukraine_links',
    'useful_nfts',
    'linux_2020',
    'vs_code_windows',
    'plantains',
    'tutorial_realt'
];
var articleEmoji = [
    '🇺🇦',
    '🖼️',
    '💽',
    '🖥️',
    '🇩🇴',
    '🏘️'
];

// latest 3 articles preview text in my site's langs
if (url_lang) {
    switch(url_lang) {
        case 'es':
            var smallArtList = '<br><span>Últimos tres artículos:</span><br><br>';
            break;
        case 'en':
            var smallArtList = '<br><span>Latest three blog posts:</span><br><br>';
            break;
        case 'nl':
            var smallArtList = '<br><span>Laatste drie blogberichten:</span><br><br>';
    }
}


// links for the article MD files and article URL
var artList = '<ul>';
for (let i = 0; i <= articleTag.length-1; i++) {
    // generate article URL
    let articleURL = `https://dac.ac/blog/${articleTag[i]}/`;

    // append to article list html object
    artList += `<span>${articleEmoji[i]}</span> - <span class="ad">${articleDates[i]}</span> - <a class="c" href="${articleURL}">${articleTitles[i]}</a><br><br>`;

    if (i < 2) {
        smallArtList += `<span>${articleEmoji[i]}</span> - <span class="ad">${articleDates[i]}</span> - <a class="bp" href="${articleURL}">${articleTitles[i]}</a><br><br>`;
    } else if (i == 2) {
        smallArtList += `<span>${articleEmoji[i]}</span> - <span class="ad">${articleDates[i]}</span> - <a class="bp" href="${articleURL}">${articleTitles[i]}</a><br>`;
    }
}
artList += '</ul><hr>';

// appending the list of articles
if (document.getElementById("articleList")) {
    document.getElementById("articleList").innerHTML = artList;
}


// appending the preview list of articles
if (document.getElementById("homepageArticlePreview")) {
    document.getElementById("homepageArticlePreview").innerHTML = smallArtList;
}

// show or hide blog preview
$("#expandBlogPreview").click(function() {
    $("#homepageArticlePreview").toggle()
    if ($("#expandBlogPreview").html() === '⊖') {
        $("#expandBlogPreview").html('⊕')
    } else {
        $("#expandBlogPreview").html('⊖')
    }
});

// check if there's a post div id to insert article content
if (document.getElementById("content")) {
    // fetch the markdown file
    fetch(art_md_path)
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML =
          marked.parse(`${data}`);
        
        // make all links' target _blank if the link does not have #
        $('a').click(function() {
            if (!(this.href.indexOf('#') > -1) && !(this.href.indexOf('https://dac.ac/') > -1)) {
                this.target = '_blank'
            }
        })

        // for articles with more custom web devy shit
        var specialAttribute = $("#content").attr('special');
        // ---------------------------- evaluate crypto projects
        switch (specialAttribute) {
            case "evaluate_crypto_projects":
                // evaluate crypto projects article
                // hide boys dont cry audio
                $('#boysDontCryAudio').hide() 
                // hide go back from glossary link
                $('#goBackToReadingSectionDiv').hide()
        }
      });
}

// random functions in specific articles
// ------------- evaluate crypto projects
// add functionality to toggle audio
function showBoysDontCry() {
    $('#boysDontCryAudio').toggle()
}
// go back to section after clicking glossary sup-button ⬆
function goBackToReadingSection() {
    $('#goBackToReadingSectionDiv').hide()
}
function captureSection(section) {
    $('#goBackToReadingSectionDiv').show()
    $('#goBackToReadingSection').attr('href',section)
}
