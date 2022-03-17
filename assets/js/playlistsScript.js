// creating playlists list
var playlistList = '';
playlistsJSON.done(() => {
    for (const [name, page] of Object.entries(playlistsContent)) {
        // append to playlist list html object
        playlistList += `<a class="p" href="${baseSpotifyLink}${page}">${name}<br><img class="playlistImages" src="/assets/playlist_images/${name}.png"></a><br><br><br>`;
    }

    // appending the list of playlists
    $("#playlistsLinks").html(playlistList);
})
