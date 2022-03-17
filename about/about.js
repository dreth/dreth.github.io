// GENERAL VARIABLES
var cvHeading;
var edWorkContents;
var otherContents;
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

// OTHER SECTION ------------------------------------------
    // list sections to loop over (these are identical)
    let other_s = ['skills','languages']
    // loop over the sections
    for (k = 0; k < other_s.length; k++) {
        // get section content from cvcontent json
        content = cvContent[other_s[k]];
        // HEADING
        otherContents = '';

        // LOOP OVER CONTENTS LIST
        for (i = 0; i < content["list"][cvLang].length; i++) {
            // section heading
            otherContents += `<div><h3>${content['heading'][cvLang]}</h3></div>`;

            // level heading if the section warrants it
            if ('level' in content) {
                
            }

            // add contents to section
            otherContents += `${title}${institution}${dates}${location}`
        }
    }
    // add contents to section innerhtml
    $(`#${ed_work[k]}Section`).html(otherContents)
    // get section content from cvcontent json
    content = cvContent["other"]
    // HEADINGS
    otherContents


    $("#otherSection").html(otherContents)
}
