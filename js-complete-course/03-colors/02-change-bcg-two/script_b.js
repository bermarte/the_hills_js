/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    console.log("begin");
    function myFunction(){
	//old way to get input value
        myInput = document.getElementsByClassName("material")[0].getElementsByTagName('form')[0][0].value;
        //https://davidwalsh.name/css-variables-javascript
        var x = getComputedStyle(document.documentElement).getPropertyValue('--main-blue');
        console.log(x);
        document.documentElement.style
            .setProperty('--main-blue', myInput);

    }
    document.getElementById("run").addEventListener("click", myFunction);


})();
