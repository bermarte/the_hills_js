/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    max = 100;
    num = Math.floor((Math.random() * max) + 1);
    var secret;
    count = 0;
    msg ="";
    while (secret !== num){
        if (secret > num){
            msg = "Too high. ";
        }
        else if (secret < num){
            msg = "Too low. ";
        }
        else if (secret == num){
           alert("That's it! You did it in "+count+" steps.");
           return;
        }
        secret = prompt(msg+"What is the secret number?");
        count++;
    }
})();
