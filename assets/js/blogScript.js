// blog links
var blog = 'https://dac.ac/blog/';
let art_path = window.location.href.split("/");
art_path = art_path[art_path.length - 2];
var art_md_path = `/blog/${art_path}/article.md`;
var art_draft_md_path = `/blog/drafts/${art_path}/article.md`;

// links for the article MD files and article URL
var artList = '';
articlesJSON.done(() => {
    for (let i = 0; i < articleTag.length; i++) {
        // generate article URL
        let articleURL = `/blog/${articleTag[i]}/`;

        // append to article list html object
        artList += `<div><span class="articleTopInfo">${articleDates[i]} - ${articleLang[i]}</span><br><a class="c" href="${articleURL}">${articleEmoji[i]} ${articleTitles[i]}</a></div><br><br>`;
    }
    artList += '<hr>';

    // appending the list of articles
    $("#articleList").html(artList);
})


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
