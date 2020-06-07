const c = document.getElementById('mijn_canvas');
const ctx = c.getContext('2d');
const score_element = document.getElementById('score');

const rij = 20;
const kolom = 10;
const vierkant = 20;
const kleur_leeg = 'white';

let drop_start = Date.now();
let score = 0;
let veld = [];
let request_id = null;
//removed: let mijn_muziek = new Audio("./tetris-gameboy.mp3");

/*
removed:
//eventlisteners
document.addEventListener('keydown', besturen);

function besturen(evt) {
    if (evt.keyCode == 37) {
    huidig_blok.links();
    drop_start = Date.now();
    } else if (evt.keyCode == 39) {
    huidig_blok.rechts();
    drop_start = Date.now();
    } else if (evt.keyCode == 40) {
    huidig_blok.zakken();
    } else if (evt.keyCode == 38) {
    huidig_blok.draaien();
    drop_start = Date.now();
    }
}
*/

/*
function muziek(){
    mijn_muziek.play();
}
*/

function teken_vierkant(x, y, kleur) {
    ctx.beginPath();
    ctx.fillStyle = kleur;
    ctx.strokeStyle = 'black';
    ctx.rect(x * vierkant, y * vierkant, vierkant, vierkant);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

for (r = 0; r < rij; r++) {
    veld[r] = [];
    for (k = 0; k < kolom; k++) {
        veld[r][k] = kleur_leeg;
    }
}
console.log(veld);

function teken_veld() {
    for (r = 0; r < rij; r++) {
        for (k = 0; k < kolom; k++) {
            teken_vierkant(k, r, veld[r][k]);
        }
    }
}

teken_veld();

const blokken = [
    [Z, 'red'],
    [S, 'green'],
    [T, 'yellow'],
    [O, 'blue'],
    [L, 'purple'],
    [I, 'cyan'],
    [J, 'orange']
]

//class Blok
function Blok(tetromino, kleur_blok) {
    this.tetromino = tetromino;
    this.kleur_blok = kleur_blok;

    this.tetrominoN = 0;
    this.tetromino_actief = this.tetromino[this.tetrominoN];

    this.x = 3;
    this.y = -2;
}

//kiezen willekeurig blok
function willekeurig_blok() {
    let willekeurig = Math.floor(Math.random() * blokken.length);

    return new Blok(blokken[willekeurig][0], blokken[willekeurig][1])
}

let huidig_blok = willekeurig_blok();
console.log(huidig_blok);


//functie om blok te vullen
Blok.prototype.vullen = function (kleur_blok) {
    for (r = 0; r < this.tetromino_actief.length; r++) {
        for (k = 0; k < this.tetromino_actief.length; k++) {
            if (this.tetromino_actief[r][k] == 1) {
                teken_vierkant(this.x + k, this.y + r, kleur_blok);
            }
        }
    }
}

Blok.prototype.tekenen = function () {
    this.vullen(this.kleur_blok);
}

Blok.prototype.wis = function () {
    this.vullen(kleur_leeg);
}

//bewegen
//beneden
Blok.prototype.zakken = function () {
    if (!this.bots(0, 1, this.tetromino_actief)) {
        this.wis();
        this.y++;
        this.tekenen();
    } else {
        this.vast();
        huidig_blok = willekeurig_blok();
        console.log(huidig_blok);
    }

}

Blok.prototype.links = function () {
    if (!this.bots(-1, 0, this.tetromino_actief)) {
        this.wis();
        this.x--;
        this.tekenen();
    }

}

Blok.prototype.rechts = function () {
    if (!this.bots(1, 0, this.tetromino_actief)) {
        this.wis();
        this.x++;
        this.tekenen();
    }

}

//draaien
Blok.prototype.draaien = function () {
    let volgende_vorm = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
    let kick = 0;

    if (this.bots(0, 0, volgende_vorm)) {
        if (this.x > kolom / 2) {
            kick = -1;
        } else {
            kick = 1;
        }
    }

    if (!this.bots(kick, 0, volgende_vorm)) {
        this.wis();
        this.x += kick;
        this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
        this.tetromino_actief = this.tetromino[this.tetrominoN];
        this.tekenen();
    }

}


Blok.prototype.vast = function () {
    for (r = 0; r < this.tetromino_actief.length; r++) {
        for (k = 0; k < this.tetromino_actief.length; k++) {
            if (this.tetromino_actief[r][k] == 0) {
                continue;
            }
            if (this.y + r < 0) {
                if (confirm("GAME OVER")) {
                    if (window.cordova.platformId == "android") {
                        alert("'play game' to restart");
                    }
                    cancelAnimationFrame(id);
                    veld = [];

                    for (r = 0; r < rij; r++) {
                        veld[r] = [];
                        for (k = 0; k < kolom; k++) {
                            veld[r][k] = kleur_leeg;
                        }
                    }

                    document.getElementById("tetris_left").removeEventListener("click", left);
                    document.getElementById("tetris_rotate").removeEventListener("click", rotate);
                    document.getElementById("tetris_right").removeEventListener("click", right);
                    document.getElementById("tetris_down").removeEventListener("click", down);

                }
                break;
            }
            veld[this.y + r][this.x + k] = this.kleur_blok;
        }
    }

    for (r = 0; r < rij; r++) {
        let rij_vol = true;
        for (k = 0; k < kolom; k++) {
            rij_vol = rij_vol && (veld[r][k] != kleur_leeg);
        }
        if (rij_vol) {
            for (y = r; y > 1; y--) {
                for (k = 0; k < kolom; k++) {
                    veld[y][k] = veld[y - 1][k];
                }
                for (k = 0; k < kolom; k++) {
                    veld[0][k] = kleur_leeg;
                }
            }
            score += 10;
        }
    }
    teken_veld();
    score_element.innerHTML = score;
}

//botsen
Blok.prototype.bots = function (x, y, blok) {
    for (r = 0; r < blok.length; r++) {
        for (k = 0; k < blok.length; k++) {
            if (blok[r][k] == 0) {
                continue;
            }

            let nieuweX = this.x + k + x;
            let nieuweY = this.y + r + y;

            if (nieuweX < 0 || nieuweX >= kolom || nieuweY >= rij) {
                return true;
            }
            if (nieuweY < 0) {
                continue;
            }
            if (veld[nieuweY][nieuweX] != kleur_leeg) {
                return true;
            }

        }
    }
    return false;
}

//gameloop

function game() {
    let nu = Date.now();
    let verschil_tijd = nu - drop_start;
    if (verschil_tijd > 1000) {
        huidig_blok.zakken();
        drop_start = Date.now();
    }
    id = requestAnimationFrame(game);
    document.getElementById("tetris_left").addEventListener("click", left);
    document.getElementById("tetris_rotate").addEventListener("click", rotate);
    document.getElementById("tetris_right").addEventListener("click", right);
    document.getElementById("tetris_down").addEventListener("click", down);

}
/* 
joystick tetris 
tetris_left
tetris_rotate
tetris_right
tetris_down
*/
//tetris
function left() {
    huidig_blok.links();
    drop_start = Date.now();
}

function right() {
    huidig_blok.rechts();
    drop_start = Date.now();
}

function down() {
    huidig_blok.zakken();
}
function rotate() {
    huidig_blok.draaien();
    drop_start = Date.now();
}
/********************* controls from main.js ****************************************/
const boodschap = document.createElement('div');
boodschap.setAttribute("class", "container");
document.getElementById('toestel_info').addEventListener('click', device_info);
//window.addEventListener('load', device_info)
const quit_li = document.createElement('div');

function device_info() {

    //on my pc battery plugin works only for Chrome   
    if (navigator.userAgent.indexOf("Chrome") != -1) {

        window.addEventListener("batterystatus", info);
    }
    else {

        window.addEventListener("click", info);
    }
    let device_info = boodschap.innerHTML;

    function info(status) {
        if (device_info == '') {

            boodschap.innerHTML = '<div class="col-12" id="device-info">' +
                '<div class="d-flex mt-5 justify-content-center">' +
                ' <div class="card w-100"><div class="card-body"><ul class="list-group list-group-flush">' +
                '   <li class="list-group-item list-group-item-action list-group-item-light">your device is: <b>' + device.model + '</b></li>' +
                '   <li class="list-group-item list-group-item-action list-group-item-light">your platform is <b>' + device.platform + '</b></li>' +
                '   <li class="list-group-item list-group-item-action list-group-item-light"> your version is <b>' + device.version + '</b></li>' +
                '   <li class="list-group-item list-group-item-action list-group-item-light">your manufacturer is <b>' + device.manufacturer + '</b></li>' +
                '   <li class="list-group-item list-group-item-action list-group-item-light">your platform is virtual <b>' + device.isVirtual + '</b></li>' +
                '       <li class="list-group-item list-group-item-action list-group-item-light">your serial is <b>' + device.serial + '</b></li>' +
                '   <li class="list-group-item list-group-item-action list-group-item-light">your device is plugged: <b>' + status.isPlugged + '</b></li>' +
                '  <li class="list-group-item list-group-item-action list-group-item-light">level of battery is <b>' + status.level + '</b></li>' +
                ' </ul></div></div></div>' +
                '</div>';
            document.getElementById('info_weergeven').appendChild(boodschap);
        }
        else {
            boodschap.innerHTML = '';

        }
    }

}
function audio() {
    var audio = new Audio();
    audio.src = './tetris/tetris-gameboy.mp3';
    audio.loop = true;
    audio.type = 'audio/wav';
    document.getElementById("play_music").addEventListener("click", playAudio);
    function playAudio() {
        !audio.paused ? audio.pause() : audio.play();
    }
}

document.getElementById("play_tetris").addEventListener("click", game);
window.addEventListener("load", audio());

document.getElementById("quit_app").addEventListener("click", quit_app);

//quit button does not work on the browser
//the code should be adapted for other platforms
if (window.cordova.platformId == "android") {
    quit_li.innerHTML = "<a class='nav-link' href='#' id='quit_app'>quit</a>";
    document.getElementById('quit_app').appendChild(quit_li);
}

//quit
function quit_app() {
    if (navigator.app) {
        if (confirm("Close Window?")) {
            navigator.app.exitApp();
        }
    } else if (navigator.device) {
        if (confirm("Close Window?")) {
            navigator.device.exitApp();
        }
    } else {
        window.close();
    }
}

