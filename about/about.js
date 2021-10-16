// changing visible site title based on locale 
var aboutTitle
switch(browserLocale) {
    case 'es':
        aboutTitle = 'Acerca de mi'
        break;
    case 'en':
        aboutTitle = 'About me'
        break;
    case 'nl':
        aboutTitle = 'Over mij'
}

// setting h3 title
document.getElementById("aboutTitle").innerHTML = `<h3>📃 ${aboutTitle}</h3>`
