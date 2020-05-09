/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    /*
    run = true;
    while (run !== false) {
        var age = prompt("How old are you?");
        var gender = prompt("what is your gender?");
        var town = prompt("what is your town?");

        if (window.confirm(age+" "+gender+" "+town)) {
            console.log("true");
            run = false;
        }
        else{
            console.log("false");
            continue;
        }
    }
    */

    /*
    if (age == undefined || gender == undefined || town == undefined ){
        age = "age is not yet defined, ";
        gender = "gender is not yet defined, ";
        town = "and town is also not yet defined";
    }
     while (!window.confirm(age+" "+gender+" "+town)){
         var age = prompt("How old are you?");
         var gender = prompt("what is your gender?");
         var town = prompt("what is your town?");
     }
     */
    
    do {
        var age = prompt("How old are you?");
        var gender = prompt("what is your gender?");
        var town = prompt("what is your town?");
    }
    while (!window.confirm(age + " " + gender + " " + town));


})();
//do while
