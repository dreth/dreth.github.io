// changing visible site title based on locale 
var playlistsTitle
switch(browserLocale) {
    case 'es':
        playlistsTitle = 'listas de reproducción'
        break;
    case 'en':
        playlistsTitle = 'playlists'
        break;
    case 'nl':
        playlistsTitle = 'afspeelijsten'
}

// setting h1 title
document.getElementById("playlistsTitle").innerHTML = `<h3>🎶 ${playlistsTitle}</h3>`

// base spotify link
var baseSpotifyLink = 'https://open.spotify.com/playlist/';

// playlist names
var playlistsNames = {
    'ambient':'3tJch4CHUPWtvW9oO9hr9K?si=29AL2w5gQDaXFN9S2CrGFQ',
    'math':'3EuNE4UrJPBpluPgms9h3q?si=d6c2f8e209b14826',
    'the sky was pink':'6ted27GV89iz0hirEv16ZN?si=182f75ded1744b63',
    'nederlands':'3t9GSwN2y974CjJb3asmNW?si=738f7c30116c4c3d',
    'clusterfuck':'0AufZp9wW0buR5M3qbBKZr?si=v1WEclfLTFumDttlunOIPw',
    'post-rock':'78aH1v1qmTmKUeOzsQl3Jx?si=rGmqwGk3T6OHuoOTo5JOlA',
    'loved despite of great faults':'25KvBLfn5apaYP0Bzp85i9?si=5889442518154d25',
    'crying songs':'4jt0i89mGnlUZeN3rN6T0j?si=c6o6kl7xTz2c2MN86VGXhg',
    'pandemic songs':'7FNIteKO07QFM73I2eos8P?si=L0hl6JEZTRq_a-pcMo8Yrg'
};

// links for the article MD files and article URL
var playlistList = '';
for (const [name, page] of Object.entries(playlistsNames)) {
    // create article URL
    var articleURL = `${page}` 

    // append to article list html object
    playlistList += `<a href="${baseSpotifyLink}${page}">${name}<br><img class="playlistImages" src="./images/${name}.png"></a><br><br><br>`;
}

// appending the list of articles
document.getElementById("playlistsLinks").innerHTML = playlistList;
