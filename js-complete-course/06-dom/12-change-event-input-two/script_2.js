/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
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
        var min = 8;

        var nums = x.value.match(/[0-9]/g);
        if (nums) var numslength = nums.length;
        
        if (num >= min && numslength >= 2) {
            document.getElementById("validity").innerText = "ok";
        } else {
            document.getElementById("validity").innerText = "not ok";
        }
    });
})
();
