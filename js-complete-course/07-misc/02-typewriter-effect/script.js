/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    text = document.getElementById("target").textContent;
    document.getElementById("target").innerHTML = "";
    let chars = text.split(/(?!$)/u);
    count = 0;
    let min = 10;
    let max = 300;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    let timer = setInterval(function () {
        if (count == chars.length - 1) {
            clearInterval(timer);
        }
        document.getElementById("target").innerHTML += chars[count++];
    }, random);

})();
