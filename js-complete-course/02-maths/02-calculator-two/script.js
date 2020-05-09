/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
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
    
    var performOperation = function(operation) {

        begin();
        switch(operation) {
            case "addition":
                result = window.opOne + window.opTwo;
                alert(result);
                break;
            case "substraction":

                result = window.opOne - window.opTwo;
                alert(result);
                break;
            case "multiplication":
                result = window.opOne * window.opTwo;
                alert(result);
                break;
            case "division":
                result = window.opOne / window.opTwo;
                alert(result);
                break;
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
