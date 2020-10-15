function swap_theme(theme, lang) {
    url = `../cvs/CV-${lang.toUpperCase()}-${theme.toUpperCase()}`
    document.getElementById('img_doc').src =  `${url}.png`
    document.getElementById('pdf_doc').href =  `${url}.pdf`
}