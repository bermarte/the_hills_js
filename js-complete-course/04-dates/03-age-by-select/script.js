/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    function checkAge() {
        //https://stackoverflow.com/questions/8152426/how-can-i-calculate-the-number-of-years-betwen-two-dates
        var dayValue = document.getElementById("dob-day").value;
        var monthValue = document.getElementById("dob-month").value;
        var yearValue = document.getElementById("dob-year").value;
        //Format: yyyy-mm-dd or yyyy/mm/dd
        enteredDate = yearValue+"-"+monthValue+"-"+dayValue;

        var years = new Date(new Date() - new Date(enteredDate)).getFullYear() - 1970;
        alert("you are "+years+" old");
    }

    document.getElementById("run").addEventListener("click", checkAge);

})();

