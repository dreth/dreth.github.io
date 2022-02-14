// hide homepage links preview
$("#homepageCoolLinkPreview").toggle()

// latest 3 links preview text in my site's langs
if (url_lang) {
    switch(url_lang) {
        case 'es':
            var homepageCoolLinkList = '<br><span>Articulos de Wikipedia que leí recientemente:</span><br><br><ul>';
            break;
        case 'en':
            var homepageCoolLinkList = '<br><span>Some Wikipedia articles I read recently:</span><br><br><ul>';
            break;
        case 'nl':
            var homepageCoolLinkList = '<br><span>Wikipedia-artikelen die ik onlangs heb gelezen:</span><br><br><ul>';
    }
}

// gather latest 3 wikipedia articles
let cnt = 0;
for (const name of Object.keys(wikipediaArticles).reverse()) {
    // extract language of article
    let articleLang = wikipediaArticles[name].slice(0,2);

    // create article URL
    var articleURL = `https://${articleLang}.${wikipediaBaseLink}${wikipediaArticles[name].slice(3)}` 

    // append to article list html object
    if (cnt < 2) {
        homepageCoolLinkList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br><br>`;
    } else {
        homepageCoolLinkList += `<span>🔗</span> <a class="b" href="${articleURL}">${name}</a><br>`;
    }
    

    // increase counter
    cnt += 1;
    
    // break if counter reaches 3
    if (cnt >= 3) {break;}
}

// appending the list of articles
if (document.getElementById("homepageCoolLinkPreview")) {
    document.getElementById("homepageCoolLinkPreview").innerHTML = homepageCoolLinkList;
}

// show or hide homepage cool links preview
$("#expandCoolLinksPreview").click(function() {
    $("#homepageCoolLinkPreview").toggle()
    if ($("#expandCoolLinksPreview").html() === '⊖') {
        $("#expandCoolLinksPreview").html('⊕')
    } else {
        $("#expandCoolLinksPreview").html('⊖')
    }
});
