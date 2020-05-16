document.addEventListener("deviceready", toestel_klaar);

function toestel_klaar() {
    
    document.getElementById('toestel_info').addEventListener('click', device_info);
    const boodschap = document.createElement('div');
    boodschap.setAttribute("class", "container");
    function device_info() {

        //on my pc battery plugin works only for Chrome   
        if(navigator.userAgent.indexOf("Chrome") != -1 )
        {
            window.addEventListener("batterystatus", info);
        }
        else{
            window.addEventListener("click", info);
        }
        let device_info = boodschap.innerHTML;
        function info(status){
            
            if (device_info == ''){
                /*
                console.log('model: '+device.model);
                console.log('platform: '+device.platform);
                console.log('uuid: '+device.uuid);
                console.log('version: '+device.version);
                console.log('manufacturer: '+device.manufacturer);
                console.log('is plugged: '+status.isPlugged);
                console.log('battery level: '+status.level);
                */
                
                boodschap.innerHTML = '<div class="col-12" id="device-info">'+
                                    '<div class="d-flex mt-5 justify-content-center">'+
                                    ' <div class="card w-100"><div class="card-body"><ul class="list-group list-group-flush">'+
                                    '   <li class="list-group-item list-group-item-action list-group-item-light">your device is: <b>'+device.model+'</b></li>'+
                                    '   <li class="list-group-item list-group-item-action list-group-item-light">your platform is <b>'+device.platform+'</b></li>'+
                                    '   <li class="list-group-item list-group-item-action list-group-item-light"> your version is <b>'+device.version+'</b></li>'+
                                    '   <li class="list-group-item list-group-item-action list-group-item-light">your manufacturer is <b>'+device.manufacturer+'</b></li>'+
                                    '   <li class="list-group-item list-group-item-action list-group-item-light">your platform is virtual <b>'+device.isVirtual+'</b></li>'+
                                     '       <li class="list-group-item list-group-item-action list-group-item-light">your serial is <b>'+device.serial+'</b></li>'+
                                    '   <li class="list-group-item list-group-item-action list-group-item-light">your device is plugged: <b>'+status.isPlugged+'</b></li>'+
                                    '  <li class="list-group-item list-group-item-action list-group-item-light">level of battery is <b>'+status.level +'</b></li>'+
                                    ' </ul></div></div></div>'+
                                    '</div>';
                document.getElementById('info_weergeven').appendChild(boodschap);
            }
            else{
                  boodschap.innerHTML='';
                
            }
        }

    }
    function audio() {
        var audio = new Audio();
        audio.src = './tetris/tetris-gameboy.mp3';
        audio.loop = true;
        audio.type = 'audio/wav';
        document.getElementById("play_music").addEventListener("click", playAudio);
        function playAudio(){
            !audio.paused ? audio.pause():audio.play();   
        }
    }
    document.getElementById("play_tetris").addEventListener("click", game); 
    window.addEventListener("load", audio());

    /* 
    joystick tetris 
    tetris_left
    tetris_rotate
    tetris_right
    tetris_down
    */
    
    document.getElementById("tetris_left").addEventListener("click", left);
    document.getElementById("tetris_rotate").addEventListener("click", rotate);
    document.getElementById("tetris_right").addEventListener("click", right);
    document.getElementById("tetris_down").addEventListener("click", down);
         function left(){
             huidig_blok.links();
             drop_start = Date.now();
         }

         function right(){
             huidig_blok.rechts();
             drop_start = Date.now();
         }

         function down(){
             huidig_blok.zakken();
         }
         function rotate(){
             huidig_blok.draaien();
             drop_start = Date.now();
         }
   
}   