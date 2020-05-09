/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //https://stackoverflow.com/questions/33514676/count-the-number-of-fridays-that-fall-on-the-13th-within-a-given-year/33514788
    function numberOfFridaythe13thsIn(x){
        var d = new Date();
        var counter = 0;
        var month;
        var fridays = [];
        for(month=0;month<12;month++)
        {
            d.setFullYear(x, month,13);
            if (d.getDay() == 5)
            {
                var options = {day: 'numeric', month: 'long'};
                fridays.push(d.toLocaleDateString("en-GB", options));
                counter++;
            }	
        }
        return fridays;
    }

    document.getElementById("run").addEventListener("click", function(){
        var yearInp = document.getElementById("year").value;
        console.log(yearInp);
        alert(numberOfFridaythe13thsIn(yearInp));
    });


})();
