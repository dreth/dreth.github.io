// self description in different languages
// ik ben een beetje lui om het in het nederlands te schrijven
// dus alsjeblieft vergeef me nederlandse en belgische vrienden
// ik hou van jullie<3

// engels
let selfDescriptionENLine1 = "I'm passionate about technology, music, blockchains, programming, internet subcultures, online privacy and security, mathematics, linguisitics and languages in general. Originally studied mathematics and then branched out into data science.";
let selfDescriptionENLine2 = "Always open to new challenges and ideas. I'm currently focusing on writing things that interest me on my blog and actively studying stuff that calls my attention. Taking a short break from the job market to learn and further develop my own projects and skills.";

var selfDescriptionEN = `<p><span>${selfDescriptionENLine1}</span><br><br><span>${selfDescriptionENLine2}</span></p>`;

// spaans
let selfDescriptionESLine1 = "Me apasiona la tecnología, la música, los blockchains, la programación, las subculturas de internet, los temas de privacidad de datos y seguridad, las matemáticas, la lingüística y los idiomas. Originalmente estudié matemáticas y luego me integré en el mundo de ciencia de datos.";
let selfDescriptionESLine2 = "Siempre abierto a nuevos retos e ideas. Actualmente me estoy enfocando en escribir sobre cosas que me interesan en mi blog y activamente estudiando cosas que me llaman la atención. Me estoy tomando un pequeño descanso del mercado laboral para aprender, estudiar y desarrollar mis propios proyectos personales y habilidades.";

var selfDescriptionES = `<p><span>${selfDescriptionESLine1}</span><br><br><span>${selfDescriptionESLine2}</span></p>`;

// url_lang wisselaar
switch(url_lang) {
    case 'en':
        var selfDescription = selfDescriptionEN;
        break;
    case 'es':
        var selfDescription = selfDescriptionES;
        break;
    case 'nl':
        var selfDescription = selfDescriptionEN;
}

// genereren de "about me" deel (Startpagina)
if (document.getElementById("homepageAboutMePreview")) {
    document.getElementById("homepageAboutMePreview").innerHTML = selfDescription.replace('<p>','<br>').replace('</p>','');
}

// genereren de "about me" deel (CV-pagina)
if (document.getElementById("aboutMeDescription")) {
    document.getElementById("aboutMeDescription").innerHTML = selfDescription;
}

// schakelaar voor startpagina "over mij" sectie
$("#homepageAboutMePreview").toggle()
// show or hide homepage playlists preview
$("#expandAboutMePreview").click(function() {
    $("#homepageAboutMePreview").toggle()
    if ($("#expandAboutMePreview").html() === '⊖') {
        $("#expandAboutMePreview").html('⊕')
    } else {
        $("#expandAboutMePreview").html('⊖')
    }
});
