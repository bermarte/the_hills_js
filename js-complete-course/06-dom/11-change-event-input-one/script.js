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
    let inputField = document.getElementById("pass-one");
    let counter = document.getElementById("counter");
    let max = 10;
    inputField.addEventListener('keyup', () => {
        if (inputField.value.length == max){
            inputField.readOnly = true;
        }
        counter.innerHTML = inputField.value.length+"/10";
    });
})
();
