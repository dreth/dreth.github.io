var counter = 0;
function changeImage() {
    switch(counter) {
        case 0:
            document.getElementById("bibiQR").src = './assets/bibi3.png';
            document.getElementById("bibitext").innerHTML = 'YES';
            counter += 1;
            break;
        case 1:
            document.getElementById("bibiQR").src = 'https://i.redd.it/qz6eknd73qvy.gif';
            document.getElementById("bibitext").innerHTML = 'YES I AM SURE I WILL GIVE U KISS AND BE UR VALENTINE';
            document.getElementById("uSure").innerHTML = '<br><h1 style="text-align: center;">ARE YOU ABSOLUTELY SURE U SAID YES??????</h1><br>';
            counter += 1;
            break;
        case 2:
            document.getElementById("uSure").innerHTML = '';
            document.getElementById("bibitext").innerHTML = 'done scanning';
            document.getElementById("bibiQR").src = './assets/bibi1.png';
            counter += 1;
            break;
        case 3:
            document.getElementById("bibitext").innerHTML = 'yes i promise ill give u more cute silly tiktok ideas and i finished scanning';
            document.getElementById("bibiQR").src = './assets/bibi2.png';
            counter += 1;
            break;
        case 4:
            document.getElementById("bibiQR").src = 'https://media1.giphy.com/media/9o59Pga7BWlDrzWhhh/giphy.gif?cid=790b76113df385f8fb4a846a3e37a64908d833e3ca4875f0&rid=giphy.gif';
            document.getElementById("uSure").innerHTML = '<br><h1 style="text-align: center;">I LOVE U</h1><br>';
            $("#bibiyes").toggle()
    }
}
