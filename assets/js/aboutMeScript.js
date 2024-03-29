// GENERAL VARIABLES
var cvHeading;
var content;
var details = 0;

// ABOUT ME SECTION, CV CONTENTS -------------  
var aboutMeJSON = $.getJSON('/data/cv.json');
var cvContent;

aboutMeJSON.done(aboutMeJSON, (cvData) => {
    cvContent = cvData;
})

// jsons to load
var aboutFiles = $.when(langsJSON, aboutMeJSON);

// TOGGLE WORK DETAILS ------------------------
function toggleDetails() {
    aboutMeJSON.done(() => {
        // toggle showing or hiding details
        details = details === 0 ? 1 : 0;
        
        // reload cv
        loadCV()
    })
}

// GENERATE CONTENTS FOR CV -------------------
function loadCV(l=language) {
    // site title
    $("#aboutMeTitleBar").html(`${langs['content']['about'][l]} | Daniel Alonso`)

    // aboutMeDescription
    $("#aboutMeDescription").html(langs['content']['about_me_text'][l])

    // about me section title
    $("#aboutHeading").html(cvContent["headings"]["aboutme"][l])

    // CV title
    $("#cvHeading").html(cvContent["headings"]["cvtitle"][l])

// EDUCATION AND WORK SECTION --------------------------------------
    // list sections to loop over (these are identical)
    let ed_work = ['education','work']
    let edWorkContents = '';
    // loop over the sections
    for (k = 0; k < ed_work.length; k++) {
        // get section content from cvcontent json
        content = cvContent[ed_work[k]];
        // HEADING
        edWorkContents = `<div><h3 class="cvHeading1">${content['heading'][l]}</h3> &nbsp;`
        
        // show detail if in the work experience section
        workDetailsToggleText = [langs['content'][`cv_detail_toggle_0`][l], langs['content'][`cv_detail_toggle_1`][l]]
        if (details === 1) {
            edWorkContents += `<a class="b" onclick="toggleDetails()"><span class="smaller">${workDetailsToggleText[0]}</span></a>`
        } else {
            edWorkContents += `<a class="b" onclick="toggleDetails()"><span class="smaller">${workDetailsToggleText[1]}</span></a>`
        }
        edWorkContents += '</div><div class="halfRightPadding"><hr></div>'

        // LOOP OVER CONTENTS LIST
        for (i = 0; i < content["list"][l].length; i++) {
            // create content components
            let title = `<ul><li><h4 class="cvHeading2">${content["list"][l][i]["title"]}</h4></li>`
            let institution = `<span>${content["list"][l][i]["institution"]}<br>`
            let dates = `${content["list"][l][i]["dates"]}<br>`
            let location = `${content["list"][l][i]["location"]}<br>`
            let schedule = `${content["list"][l][i]["schedule"]}</span></ul>`

            // add contents to section
            edWorkContents += `${title}${institution}${dates}${location}${schedule}`

            // add details if in work section
            if (details === 1) {
                edWorkContents += `<ul class="smaller">${content["detail"][l][i]}</ul>`
            }
        }

        // add contents to section innerhtml
        $(`#${ed_work[k]}Section`).html(edWorkContents)
    }

// OTHER SECTION -----------------------------------------------------
    // list sections to loop over (these are identical)
    let other_s = ['skills', 'languages'];
    let otherContents = '';
    // loop over the sections
    for (k = 0; k < other_s.length; k++) {
        // get section content from cvcontent json
        let content = cvContent['other'][other_s[k]];

        // HEADING
        otherContents += `<br><div><h3 class="cvHeading1">${content['heading'][l]}</h3></div><div class="halfRightPadding"><hr></div>`;

        // LOOP OVER CONTENTS LIST
        for (const [level, langContent] of Object.entries(content['list'][l])) {
            // for stuff with levels of difficulty
            if (level != 'noLevel') {
                // mark level
                otherContents += `<ul><li><h4>${content['level'][l][level]}</h4></li><ul>`;

                // add list elements
                for (s = 0; s < langContent.length; s++) {
                    otherContents += `<li><span>${langContent[s]}</span></li>`;
                }
                otherContents += '</ul></ul>';
            }
            // if there's no level of difficulty
            else {
                // mark level
                otherContents += `<ul  class="skills">`;

                // take values from langcontent (skills)
                let objLangContent = Object.values(langContent);

                // add list elements
                for (s = 0; s < objLangContent.length; s++) {
                    otherContents += `<li><span>${objLangContent[s]}</span></li>`;
                }
                otherContents += '</ul></ul>';
            }
        }
    }
    // add contents to section innerhtml
    $(`#otherSection`).html(otherContents)
}

// AFTER JSON LOADS, LOAD CV
aboutFiles.done(() => {
    loadCV()
    // if on about me page
    if (document.getElementById("downloadCVLink")) {
        // CV PDF DOWNLOAD LINK
        $("#downloadCVLink").attr('href',`/assets/py/Daniel_CV_${language}.pdf`)
    }
})
