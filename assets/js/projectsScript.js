// update language function
function updateProjectsList(l=language) {    

    // -------------------------- PROJECTS
    var projectList = '';
    for (const sec of Object.keys(projectNames)) {

        // generate section
        if (JSON.parse(projectSections[sec]["include"]) == true) {
            
            // generate heading
            var projectHeading = `<h4>${projectSections[sec]['emoji']} ${projectHeadings[sec][l]}</h4>`;

            // append to article list html object
            projectList += `${projectHeading}<ul class="noBullets">`;
            for (let i = 0; i < projectNames[sec].length; i++) {
                // type of link to project
                let projectTypeOfLink = projectLinks[sec][i].includes("github") ? "github" : "website";

                // project NAMES
                projectList += `<li class="pjs">${projectNames[sec][i][l]}</li>`;
                // project DESCRIPTIONS
                projectList += `<br><ul class="noBullets"><li class="pjs-desc">${projectDescriptions[sec][i][l]}</li>`;
                // project LINKS
                if (projectLinks[sec][i] != "") {
                    projectList += `<br><li class="pjs-gh"><a class="b" href="${projectLinks[sec][i]}">${projectLinkHeading[projectTypeOfLink][l]}</a></li></ul><br><br>`;
                } else {
                    projectList += `<br><br>`;
                }
            }
            projectList += '</ul><hr>';
        }
    }

    // appending the list of articles
    if (document.getElementById("projectsList")) {
        $("#projectsList").html(projectList);
    }

}

// update projects list
allFiles.done(() => {
    updateProjectsList()

    // make all links' target _blank if the link does not have #
    $('a').click(function() {
        if (!(this.href.indexOf('https://dac.ac') > -1) | !(this.href.indexOf('#') > -1) | !(this.href.indexOf('/') > -1)) {
            this.target = '_blank'
        }
    })
})
