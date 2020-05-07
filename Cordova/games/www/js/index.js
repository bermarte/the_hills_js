document.addEventListener("deviceready", toestel_klaar);

function toestel_klaar() {
    
    //ocument.getElementById('toestel_info').addEventListener('click', device_info);
    document.getElementById('toestel_info').addEventListener('click', device_info);
    //document.getElementById('toestel_info').addEventListener('click', onBatteryStatus);

    let boodschap = document.createElement('p');

    function device_info() {
        console.log('model: '+device.model);
        console.log('model: '+device.platform);

        let device_model = device.model;
        let device_platform = device.platform;

        boodschap.innerHTML = 'uw model is: '+device_model+' en u platform is '+device_platform;
        document.getElementById('info_weergeven').appendChild(boodschap);
    }

    function onBatteryStatus(status) {
        console.log('click');
        
        console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);

        boodschap.innerHTML = 'Level: ' + status.level + ' is plugged: ' + status.isPlugged;
        document.getElementById('info_battery').appendChild(boodschap);
        
    }


}


