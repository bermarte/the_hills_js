document.addEventListener("deviceready", toestel_klaar);

function toestel_klaar() {
    const boodschap = document.createElement('div');
    boodschap.setAttribute("class", "container");
    //remove info button on android
    if (navigator.app) {
        let toestel_info = document.getElementById('toestel_info');
        document.getElementById('div-info').removeChild(toestel_info);
    }
    else {
        document.getElementById('toestel_info').addEventListener('click', device_info);

    }

    const quit_li = document.createElement('li');
    quit_li.setAttribute("class", "nav-item");

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
    let play_tetris = false;
    //alert(play_tetris);
    document.getElementById("play_tetris").addEventListener("click", game);
    window.addEventListener("load", audio());

    /* 
    joystick tetris 
    tetris_left
    tetris_rotate
    tetris_right
    tetris_down
    */
        /*
        document.getElementById("tetris_left").addEventListener("click", left);
        document.getElementById("tetris_rotate").addEventListener("click", rotate);
        document.getElementById("tetris_right").addEventListener("click", right);
        document.getElementById("tetris_down").addEventListener("click", down);
        */
    function control_tetris() {
        alert('control');
    }

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

    document.getElementById("quit_app").addEventListener("click", quit_app);

    //quit button does not work on the browser
    if (navigator.app || navigator.device) {
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
}   