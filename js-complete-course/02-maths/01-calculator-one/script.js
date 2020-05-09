/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function begin(){
    x = document.getElementById("op-one").value;
    y = document.getElementById("op-two").value;
    window.opOne = parseFloat(x);
    window.opTwo =  parseFloat(y);

    if (isNaN(window.opOne) || isNaN(window.opTwo)){
        alert("you need to use numbers");
    }
}


(function() {

    console.log("begin");

    document.getElementById("addition").addEventListener("click", function() {
        console.log("addition");
        begin();
        result = window.opOne + window.opTwo;
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        console.log("substraction");
        begin();
        result = window.opOne - window.opTwo;
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        console.log("multiplication");
        begin();
        result = window.opOne * window.opTwo;
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        console.log("division");
        begin();
        result = window.opOne / window.opTwo;
        alert(result);
    });
})();
