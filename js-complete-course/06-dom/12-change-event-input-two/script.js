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

    const min = 8;
    const nums = 2;
    let inputField = document.getElementById("pass-one");
    count = 0;
    num = /\d+/g;

    inputField.addEventListener('input', function() {
        var lastChar = inputField.value.substr(inputField.value.length - 1);
        console.log("lastChar "+lastChar);
        if (lastChar.match(/\d+/g)){
            count++;
        }
        if (inputField.value.length >= min &&  count >= nums){
            validity.innerHTML = "ok";
        }
    });
})
();

