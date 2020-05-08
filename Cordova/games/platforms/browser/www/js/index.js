document.addEventListener("deviceready", toestel_klaar);



function toestel_klaar() {
    
    document.getElementById('toestel_info').addEventListener('click', device_info);
    //document.getElementById('toestel_info').addEventListener('click', onBatteryStatus);

    let boodschap = document.createElement('p');

    function device_info() {
        console.log('model: '+device.model);
        console.log('model: '+device.platform);
        console.log('model: '+device.uuid);
        console.log('model: '+device.version);
        console.log('model: '+device.manufacturer);
        console.log('model: '+device.isVirtual);
        console.log('model: '+device.serial);


        boodschap.innerHTML = '<div class="card"><div class="card-body"><ul class="list-group list-group-flush">'+
                              '  <li class="list-group-item list-group-item-action list-group-item-light">your device is: <b>'+device.model+'</b></li>'+
                              '  <li class="list-group-item list-group-item-action list-group-item-light">your platform is <b>'+device.platform+'</b></li>'+
                              '  <li class="list-group-item list-group-item-action list-group-item-light"> your version is <b>'+device.version+'</b></li>'+
                              '  <li class="list-group-item list-group-item-action list-group-item-light">your manufacturer is <b>'+device.manufacturer+'</b></li>'+
                              '  <li class="list-group-item list-group-item-action list-group-item-light">your platform is virtual <b>'+device.isVirtual+'</b></li>'+
                              '  <li class="list-group-item list-group-item-action list-group-item-light">your serial is <b>'+device.serial+'</b></li>'+
                              '</ul></div></div>';
        document.getElementById('info_weergeven').appendChild(boodschap);

    }

    function onBatteryStatus(status) {
        console.log('click');
        
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);

        boodschap.innerHTML = 'Level: ' + status.level + ' is plugged: ' + status.isPlugged;
        document.getElementById('info_battery').appendChild(boodschap);
        
    }

}