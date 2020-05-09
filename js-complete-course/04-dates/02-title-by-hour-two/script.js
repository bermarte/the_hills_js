/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //https://stackoverflow.com/questions/19004950/how-to-compare-time-in-javascript
    var time1 = "17:30";
    var date = new Date;
    var minutes = date.getMinutes();
    var hour = date.getHours();
    time2 = hour+":"+minutes;
    //extra definition
    x ="";
    //dummy data for the year, it should just be te same for the two values
    var time1Date= new Date("01/01/2000 "+time1);
    var time2Date= new Date("01/01/2000 "+time2);

    if(time1Date >= time2Date ){
        console.log("it is before "+time1);
        x = "Hello";
    }else{
        console.log("it is after "+time2);
        x = "Good evening";
    }

    document.getElementById("target").innerHTML = x;

})();
