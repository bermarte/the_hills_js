/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function () {
    var x = document.getElementById('pass-one');
    x.addEventListener("input", function () {
        var num = x.value.length;
        x.maxLength = 10;
        document.getElementById("counter").innerText = num + '/10';
    });
})();