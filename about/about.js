// GENERAL VARIABLES
var cvHeading;
var content;

// ABOUT ME SECTION, CV CONTENTS -------------  
var aboutMeJSON = $.getJSON('/data/cv.json');
var cvContent;

aboutMeJSON.done(aboutMeJSON, (cvData) => {
    cvContent = cvData;
})

// SET LANGUAGE TO DISPLAY CV IN -------------
if (language == 'en' | language == 'nl') {
    var cvLang = 'en';
} else if (language == 'es') {
    var cvLang = 'es';
}

// GENERATE CONTENTS FOR CV -------------------
function loadCV() {
    // about me section title
    $("#aboutHeading").html(cvContent["headings"]["aboutme"][cvLang])

    // CV title
    $("#cvHeading").html(cvContent["headings"]["cvtitle"][cvLang])

// EDUCATION AND WORK SECTION --------------------------------------
    // list sections to loop over (these are identical)
    let ed_work = ['education','work']
    let edWorkContents = '';
    // loop over the sections
    for (k = 0; k < ed_work.length; k++) {
        // get section content from cvcontent json
        content = cvContent[ed_work[k]];
        // HEADING
        edWorkContents = `<div><h3>${content['heading'][cvLang]}</h3></div>`

        // LOOP OVER CONTENTS LIST
        for (i = 0; i < content["list"][cvLang].length; i++) {
            // create content components
            let title = `<ul><li><h4>${content["list"][cvLang][i]["title"]}</h4></li>`
            let institution = `<span>${content["list"][cvLang][i]["institution"]}<br>`
            let dates = `${content["list"][cvLang][i]["dates"]}<br>`
            let location = `${content["list"][cvLang][i]["location"]}</span></ul>`

            // add contents to section
            edWorkContents += `${title}${institution}${dates}${location}`
        }

        // add contents to section innerhtml
        $(`#${ed_work[k]}Section`).html(edWorkContents)
    }

// OTHER SECTION -----------------------------------------------------
    // list sections to loop over (these are identical)
    let other_s = ['languages','skills'];
    let otherContents = '';
    // loop over the sections
    for (k = 0; k < other_s.length; k++) {
        // get section content from cvcontent json
        let content = cvContent['other'][other_s[k]];

        // HEADING
        otherContents += `<div><h3>${content['heading'][cvLang]}</h3></div>`;

        // LOOP OVER CONTENTS LIST
        for (const [level, langContent] of Object.entries(content['list'][cvLang])) {
            // for stuff with levels of difficulty
            if (level != 'noLevel') {
                // mark level
                otherContents += `<ul><li><h4>${content['level'][cvLang][level]}</h4></li><ul>`;

                // add list elements
                for (s = 0; s < langContent.length; s++) {
                    otherContents += `<li><span>${langContent[s]}</span></li>`;
                }
                otherContents += '</ul></ul>';
            }
            // if there's no level of difficulty
            else {
                // mark level
                otherContents += `<ul>`;

                // add list elements
                for (s = 0; s < langContent.length; s++) {
                    otherContents += `<li><span>${langContent[s]}</span></li>`;
                }
                otherContents += '</ul></ul>';
            }
        }
    }
    // add contents to section innerhtml
    $(`#otherSection`).html(otherContents)
}

// AFTER JSON LOADS, LOAD CV
aboutMeJSON.done(() => {
    loadCV()
})

// CHANGE LANGUAGE FUNCTION
function changeCVLang(l) {
    // switch language
    cvLang = l;

    // refresh lang
    if (language == 'nl') {
        language = 'nl';
    } else {
        language = l;
    }

    aboutMeJSON.done(() => {
        loadCV()
    })

    allFiles.done(() => {
        loadObjects(langs)
    })
}
