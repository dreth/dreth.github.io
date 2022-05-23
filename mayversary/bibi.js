var messageClicked = 0;
var lastNumberClicked;
var lastColor;
$("#colorToggles").toggle()
$("#gc").hide()

const messages = {
    1:'i love u',
    2:'happy monthversary',
    3:'big titty mama',
    4:'i know we had some issues these days',
    5:'but it\'s okay and it\'s not your fault',
    6:"don't feel bad about it because you did nothing wrong",
    7:"and it's okay to feel however you feel and you can feel like this as many times as you need",
    8:"i will love u no matter what",
    9:"please communicate with me because i love when you talk to me",
    10:"i wish i could celebrate with you every month, but coding is okay to celebrate it since i get to write cute stuff for u like this",
    11:"and the more i do it the better at it i get",
    12:"so it's also practice which is good, but i enjoy doing this for u because it's fun and because i love your reaction to it",
    13:"so i will try to keep doing something like this every other month until i run out of ideas",
    14:"talking to you brings me joy and it sucks we couldn't talk as much these days  but it's okay, we will get back to our regularly scheduled kiss and brawlbots program soon",
    15:"we should also honestly find a better game tho...",
    16:"but its ok cause i would have fun with u doing anything",
    17:"we could literally take a stick and go to the park to roll dog turds and id be happy cause im doing it with u",
    18:"so anyway when we go to chinese garden to roll dog poop w sticks hehe",
    19:"which reminds me why u dont want me to go to jurong east HUH u scared of WHAT",
    20:"anyway so u wanna be my gf or what",
    21:"today i didnt sleep all that well but i wish i had a dream where we kiss a lot",
    22:"im calling u now and u sound so cute omg",
    23:"booby",
    24:"not gonna tell u what im writing u silly what u think i gonna disclose my fun gifts before giving them to u HUH",
    25:"bet ur expecting like a grab food giftcard or something but NOOOO im cooler than that BIUUBIUBU",
    26:`<pre>
        .....           .....
    ,ad8PPPP88b,     ,d88PPPP8ba,
   d8P"      "Y8b, ,d8P"      "Y8b
  dP'           "8a8"           \`Yd
  8(              "              )8
  I8                             8I
   Yb,                         ,dP
    "8a,                     ,a8"
      "8a,                 ,a8"
        "Yba             adP"   
          \`Y8a         a8P'
            \`88,     ,88'
              "8b   d8"
               "8b d8"
                \`888'
                  "
 
    </pre>`,
    27:`<pre>                       
                       @@@@@@           @@@@@@
                     @@@@@@@@@@       @@@@@@@@@@
                   @@@@@@@@@@@@@@   @@@@@@@@@@@@@@
                 @@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                     @@@@@@@@@@@@@@@@@@@@@@@@@@@
                       @@@@@@@@@@@@@@@@@@@@@@@
                         @@@@@@@@@@@@@@@@@@@
                           @@@@@@@@@@@@@@@
                             @@@@@@@@@@@
                               @@@@@@@
                                 @@@
                                  @
    </pre>`,
    28:`<pre>
    XOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOX
    O:::::::::::::::::::::::::::::::::::::::::::::::::::::::O
    X:::::::::::::::::::::::::::::::::::::::::::::::::::::::X
    O::::::::::::           :::::::::           ::::::::::::O
    X:::::::::                :::::                :::::::::X
    O:::::::       *********    :    *********       :::::::O
    X:::::      *****     *****   *****     *****      :::::X
    O::::     ****           *******           ****     ::::O
    X:::     ****              ***              ****     :::X
    O:::     ****               *               ****     :::O
    X::::     ****                             ****     ::::X
    O:::::     ****                           ****     :::::O
    X:::::::     ****                       ****     :::::::X
    O:::::::::     ****                   ****     :::::::::O
    X:::::::::::     ****               ****     :::::::::::X
    O::::::::::::::     ****         ****     ::::::::::::::O
    X:::::::::::::::::     ****   ****     :::::::::::::::::X
    O::::::::::::::::::::     *****     ::::::::::::::::::::O
    X:::::::::::::::::::::::    *    :::::::::::::::::::::::X
    O:::::::::::::::::::::::::     :::::::::::::::::::::::::O
    X::::::::::::::::::::::::::: :::::::::::::::::::::::::::X
    O:::::::::::::::::::::::::::::::::::::::::::::::::::::::O
    X:::::::::::::::::::::::::::::::::::::::::::::::::::::::X
    OXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXOXO 
    </pre>`,
    29:"did u like the art in 26, 27 and 28???",
    30:"ok good cause i didnt do it but i still looked it up for u that has merit right",
    31:"ive been missing u all these days ))))))))): when we watching a film together again",
    32:"i wanna watch some old but funny films with u",
    33:`<embed src="https://en.wikipedia.org/wiki/love">`,
    34:`<embed src="https://en.wikipedia.org/wiki/eternity">`,
    35:`<embed src="https://en.wikipedia.org/wiki/singapore">`,
    36:`<embed src="https://en.wikipedia.org/wiki/wedding_ring">`,
    37:"i miss u now >:(",
    38:`<pre>
    FASTER TAKE OUT THE TITTIES 
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠋⠉⠙⠻⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠹⣿⣿⣶⣶⣦⣬⢹⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⠄⣰⣧⡀⠄⠄⠄⠄⠈⢙⡋⣿⣿⣿⢸⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠰⠼⢯⣿⣿⣦⣄⠄⠄⠄⠈⢡⣿⣿⣿⢸⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⠸⠤⠕⠛⠙⠷⣿⡆⠄⠄⠄⣸⣿⣿⡏⣼⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣴⣿⣿⣿⢡⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⣄⠄⢀⠄⠄⢀⣤⣾⣿⣿⣿⢃⣾⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⠿⣛⣡⣄⣀⠄⠠⢴⣿⣿⡿⣄⣴⣿⣿⣿⣿⣿⢃⣾⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⡏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣩⡽⡁⢸⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⢃⣿⣿⢟⣿⣿⣿⣿⣿⣮⢫⣿⣿⣿⣿⣿⣟⢿⠃⠄⢻⣿⣿⣿⣿
    ⣿⣿⣿⣿⡿⣸⠟⣵⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣷⣄⢰⡄⢿⣿⣿⣿
    ⣿⣿⣿⣿⡇⠏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠹⡎⣿⣿⣿
    ⣭⣍⠛⠿⠄⢰⠋⡉⠹⣿⣿⣿⣿⣿⣿⠙⣿⣿⣿⣿⣿⣿⡟⢁⠙⡆⢡⣿⣿⣿
    ⠻⣿⡆⠄⣤⠈⢣⣈⣠⣿⣿⣿⣿⣿⠏⣄⠻⣿⣿⣿⣿⣿⣆⣈⣴⠃⣿⣿⣿⣿
    ⡀⠈⢿⠄⣿⡇⠄⠙⠿⣿⡿⠿⢋⣥⣾⣿⣷⣌⠻⢿⣿⣿⡿⠟⣡⣾⣿⣿⠿⢋
    ⠛⠳⠄⢠⣿⠇⠄⣷⡑⢶⣶⢿⣿⣿⣿⣽⣿⣿⣿⣶⣶⡐⣶⣿⠿⠛⣩⡄⠄⢸
    </pre>`,
    39:"TATITA",
    40:`<h1>I LOVE U</h1><br><img src="./buibi.jpg">`,
    41:"i think ull like the gift u better gimme a kiss nOW before the gift",
    42:`<h2>WE ARE GONNA HAVE A CAT</h2><br><pre>
     /\_/\
    ( o.o )
     > ^ <
    </pre>`,
    43:`<h2>AND WE WILL HAVE A FEW CACTI</h2><br><pre>
        |_|_|
      \_|||;;_/
     \d||%||%:b/               |_|_|
    \d~|dO%|i::b/            \_|||;;_/
  ._H||dSf|||%::H_.         \d|||||;:b/
  ._H@|dLF|}|;::H_.        \d||#H#|;::b/
  ._H||dXFt||;.:H_.      ._H||#H#|||;::H_.   
  ._?|{|P|||/;:.P_.      ._H||#H#|||;::H_.
   ._Hy||t|||;:H_.       ._H||#H#|||;::H_.
   ._?|x||T|;i:P_.       ._?|||#||||;::P_.
    ._H||i||;:H_.         ._H|||||||;:H_.
    ._H|"|||;:H_.         ._?||||||;::P_.
 .=================.       ._H|||||;:H_.
 |;;|#H#|;;;;;;;;: |       ._H|||||;:H_.
 .=================.    .=================.
  |;|#H#|;;;;;;;: |     |_________________|
   |;|#H#|;;;;;: |       |               |
   |;|#H#|;;;;;: |        |             |
    |;|#H#|;;;: |         |             |
    |;|#H#|;;;: |          |           |
     |;|#H#|;: |           |           |
      =========             |_________|
    </pre>`,
    44:"ur such a good girlfriend girlfriend",
    45:"huge kisses for u babe",
    46:`<embed src="https://en.wikipedia.org/wiki/anal_sex">`,
    47:"can i be ur boyfriend forever thx",
    48:"i hope u have had fun with this, it has been really fun to make",
    49:`<h2>GIMME THE BOOTY</h2><br><pre>
  \\           /
   \\         /
    )       (
  .\`         \`.
.'             \`.
:        |       :
'.      .'.     .'
  \\\`'''\`\ /\`'''\`/
   \\     |    /
    |    |    |lc

    </pre>`,
    50:"i have the most stylish and cute gf ever",
    51:"i love u",
    52:"happy 2 years and 8 months bebi",
    53:"it only gets better with u",
    54:"also clicking on my name should show ur gift (: (only if you have clicked all numbers)"
}

var clicks = {};
for (let k = 1; k < 55; k++) {
  clicks[k] = false;
}

function showText(num, cc=false) {
    let r1 = Math.floor(Math.random() * 255) + 1;
    let r2 = Math.floor(Math.random() * 255) + 1;
    let r3 = Math.floor(Math.random() * 255) + 1;
    console.log(`rgb(${r1}, ${r2}, ${r3})`)

    $("#text").html(`<h1 class="fadein">${messages[num]}</h1>`)
    $("#text").css({'color': `rgb(${r1}, ${r2}, ${r3})`})
    lastColor = `rgb(${r1}, ${r2}, ${r3})`

    if (!cc) {
      if (clicks[num] == false) {
        messageClicked += 1;
      }
      clicks[num] = true;
    }
    
    $("#numbersClicked").html(`${messageClicked}`)
    $("#numbersClicked").css({'color': `rgb(${r2}, ${r3}, ${r1})`})

    lastNumberClicked = num;
    $("#colorToggles").show()
}

function makeCurrentColorBackground() {
    $("#body").css({'background-color':lastColor})
    if (getCookie('theme') == 1) {
        $("#textAndOptions").css({'background-color':'black'})
        $("#buttons").css({'background-color':'black'})
        $("#gc").css({'background-color':'black'})
    } else {
        $("#textAndOptions").css({'background-color':'white'})
        $("#buttons").css({'background-color':'white'})
        $("#gc").css({'background-color':'white'})
    }
    
}

function copyToClipboard(content) {
    let cardId = '1112716532963157050';
    let pin = '2660';
    content = content === 'cardId' ? cardId : pin;
    navigator.clipboard.writeText(content)
}

function showGC() {
    if (Object.values(clicks).filter((obj)=>obj==false).length == 0) {
        $("#gc").html(`
            <br><br>
            <img src="gc.png">
            <br><br>
            <a class="b" onclick="copyToClipboard('cardId')">💚 Click to copy card number</a>
            <br><br>
            <a class="b" onclick="copyToClipboard('pin')">💚 Click to copy PIN</a>
        `)

        $("#gc").show()
    }
}

window.addEventListener('load', () => {
    var buttons = '';
    for (let i = 1; i < 55; i++) {
        let fun = `showText(num=${i})`;
        if (i < 10) {
            buttons += `<a class="b" onclick="${fun}"><h2 class="inline">&nbsp;${i}&nbsp;</h2></a>&emsp;`
        } else {
            buttons += `<a class="b" onclick="${fun}"><h2 class="inline">${i}</h2></a>&emsp;`
        }
    }
    $("#buttons").html(buttons)
})
