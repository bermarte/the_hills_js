/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    text = document.getElementById("target").textContent;
    document.getElementById("target").innerHTML="";
    let chars = text.split(/(?!$)/u);
    sample = 10;// wave length
    basicHeight = 12;// basic font-size
    increment = 4;// font-size * increment factor
    var valuem = 0, dir = 1;

    chars.forEach(elem => {
        //https://stackoverflow.com/questions/36823238/increase-value-until-limit-then-decrease-loop
        (function() {
            valuem += dir;
            if (valuem < 1) dir = 1;
            if (valuem > sample) dir = -1;
            document.getElementById("target").innerHTML += "<span style=\"color:blue; font-size:" + (basicHeight + valuem*increment) + "px; \">" + elem + "</span>";
        })();
    })

})();
