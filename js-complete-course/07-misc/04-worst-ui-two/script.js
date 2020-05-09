/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var buttons = document.querySelectorAll('.actions *');
    buttons.forEach(element => {
        element.addEventListener('click', function () {
            datamax = element.getAttribute("data-max");
            datamin = element.getAttribute("data-min");
            num = Number(element.innerHTML);
            if (num < datamax) {
                num++;
                if (num < 10) {
                    element.innerHTML = "0" + num;
                } else {
                    element.innerHTML = num;
                }
            } else if (num == datamax) {
                element.innerHTML = datamin;
            }
            fillDiv();
        });
    });
    document.getElementById("target").innerHTML = "+0460000000";
    function fillDiv() {
        text = "";
        buttons.forEach(element => {
            text += element.innerHTML;
            document.getElementById("target").innerHTML = "+0" +text;
        });
    }
})();
