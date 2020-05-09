/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var buttons = document.querySelectorAll(".field.slot button");
    var inputs = document.querySelectorAll(".field.slot input");
    speed = 70;

    interval = 1;
    if(navigator.userAgent.indexOf("Firefox") != -1 ) interval = 2;
    else if(navigator.userAgent.indexOf("Chrome") != -1 )  interval = 1;
    else interval = 1;


    inputs.forEach((element, index) => {

        //create different setIntervals variables names: 1, 2...
        tmp = 'timer';
        str = tmp+' = '+index;
        eval(str);
        timer = eval(str);

        timer = setInterval(function () {
            datamin = element.getAttribute("data-min");
            datamax = element.getAttribute("data-max");

            random = Math.floor(Math.random() * (Number(datamax) - Number(datamin) + 1)) + Number(datamin);

            if (random < 10) {
                element.value = "0" + random
            } else {
                element.value = random;
            }
        }, speed);
        
        buttons.forEach((element,index) => {
            buttons[index].addEventListener('click', function () {
                clearInterval(index+interval);
                newValue = inputs[index].value;
                //var target = document.getElementById("target").innerHTML;
                var target = document.getElementById("target").innerHTML;

                if (index == 0){
                    pos = 2;
                }
                else{
                    pos = index+3;
                }
                x = target.replaceAt(index+pos, newValue);
                document.getElementById("target").innerHTML= x
            });
        });

    })
    document.getElementById("target").innerHTML= document.getElementById("target").innerHTML.replace("+", "+0");
    //https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
    //546
    String.prototype.replaceAt=function(index, replacement) {
        return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
    }
})();
