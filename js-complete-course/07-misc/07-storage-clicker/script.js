/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    if (localStorage.getItem("loc") === null) {
        document.getElementById("target").innerHTML = 0;
    }
    else{
        document.getElementById("target").innerHTML = localStorage.getItem("loc");
    }
    document.getElementById("increment").addEventListener("click", function(){
        inp = localStorage.getItem("loc");
        counter = Number(inp) + 1
        localStorage.setItem("loc", counter);
        document.getElementById("target").innerHTML = localStorage.getItem("loc");
    });
})();
