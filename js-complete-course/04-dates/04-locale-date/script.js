/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    //https://reactgo.com/format-date-time-javascript/
    var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    var options2 = { hour12 : false, hour:  "numeric", minute: "numeric"};
    var today  = new Date();
    date = today.toLocaleDateString("en-GB", options);
    time = today.toLocaleTimeString("en-GB", options2);
    date = date.replace(',','');
    time = time.replace(':','h');
    out = date+", "+time;
    document.getElementById("target").innerHTML = out;

})();
