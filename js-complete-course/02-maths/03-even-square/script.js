/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        text ="";
        last = 22;
        for (i = 0; i < last; i++) {
            if (i == last-1){
                sep ="";
            }
            else{
                sep=", ";
            }
            text += (i+1)+"*"+(i+1)+"= "+Math.pow(i+1,2)+sep;
        }
        alert(text);
    });

})();
