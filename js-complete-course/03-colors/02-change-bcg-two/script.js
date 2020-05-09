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
        bg = document.body.style.backgroundColor;
	//old way to get input value
        myInput = document.getElementsByClassName("material")[0].getElementsByTagName('form')[0][0].value;
        if (myInput==""){
            alert("you nedd to fill the form");
        }
        else{
            document.body.style.background = myInput;
            console.log("background: "+bg);
        }


    }
    document.getElementById("run").addEventListener("click", myFunction);


})();
