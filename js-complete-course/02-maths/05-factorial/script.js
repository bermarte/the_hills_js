/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var input = document.getElementById("number").value;
	//https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/
        function factorialize(num) {
            var result = num;
            if (num === 0 || num === 1)
                return 1;
            while (num > 1) {
                num--;
                result *= num;
            }
            alert(result);
            return result;
        }
        factorialize(input);

    });

})();
