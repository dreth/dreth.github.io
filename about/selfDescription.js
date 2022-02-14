// self description in different languages
// ik ben een beetje lui om het in het nederlands te schrijven
// dus alsjeblieft vergeef me nederlandse en belgische vrienden
// ik hou van jullie<3

// engels
let selfDescriptionENLine1 = "I'm passionate about technology, music, blockchains, programming, internet subcultures, online privacy and security, mathematics, linguisitics and languages in general.";
let selfDescriptionENLine2 = "I currently work in the field of data science, but I'm always open to new cool challenges (as long as they're fun and interesting)";

var selfDescriptionEN = `<p><span>${selfDescriptionENLine1}</span><br><br><span>${selfDescriptionENLine2}</span></p>`;

// spaans
let selfDescriptionESLine1 = "Me apasiona la tecnología, la música, los blockchains, la programación, las subculturas de internet, los temas de privacidad de datos y seguridad, las matemáticas, la lingüística y los idiomas.";
let selfDescriptionESLine2 = "Actualmente me dedico a trabajar en ciencia de datos, pero me mantengo abierto a nuevos retos (siempre que divertidos e interesantes)";

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
