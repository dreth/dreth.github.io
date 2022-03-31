// creating playlists list
var breakPlaylistsAt = 4;
var playlistList = '<div class="column leftcol-playlists">';

playlistsJSON.done(() => {
    let playlistDivisionCounter = 0;
    for (const [name, page] of Object.entries(playlistsContent)) {
        // construct playlist url
        let playlistURL = `${baseSpotifyLink}${page}`;

        // boilerplate
        let playlistBlock = `
            <div class="img__wrap">
                <a href="${playlistURL}"><br>
                <img class="img__img playlistImages" src="/assets/playlist_images/${name}.png" title="${name}">
                <div class="img__description_layer img__dl_hover_panel">
                    <br>
                    <p class="img__description">${name}</p>
                </div>
                </a>
            </div><br><br><br>
        `;
        
        // append to playlist list html object
        console.log(playlistDivisionCounter)
        if (playlistDivisionCounter < (breakPlaylistsAt + 1)) {
            console.log("left side")
            if (playlistDivisionCounter === breakPlaylistsAt) {
                playlistList += `${playlistBlock}</div>`;
            } else {
                playlistList += `${playlistBlock}`;
            }
        } else {
            console.log("right side")
            if (playlistDivisionCounter === (breakPlaylistsAt + 1)) {
                playlistList += `<div class="column rightcol-playlists">${playlistBlock}`;
            } else {
                playlistList += `${playlistBlock}`;
            }
            
        }

        // increment playlistdivision counter
        playlistDivisionCounter += 1;
    }
    playlistList += '</div>'

    // appending the list of playlists
    $("#playlistsLinks").html(playlistList);
})
