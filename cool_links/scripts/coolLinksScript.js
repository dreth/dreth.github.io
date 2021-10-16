// changing visible site title based on locale 
var linksTitle
switch(browserLocale) {
    case 'es':
        linksTitle = 'links cool'
        break;
    case 'en':
        linksTitle = 'cool links'
        break;
    case 'nl':
        linksTitle = 'coole links'
}

// setting h1 title
document.getElementById("linksTitle").innerHTML = `<h3>⛓️ ${linksTitle}</h3>`
