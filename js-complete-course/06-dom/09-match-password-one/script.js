/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function () {

        const field = document.querySelectorAll(".field input");
        console.log(field);

        function check(){
            if (input1 == ""){
                wrong();
            }
            else{
                console.log("fine");
            }
        }
        function wrong(){
            console.log("wrong");
            field.forEach(elem => elem.style.border = "1px solid red");
        }
        function reset(){
            field.forEach(elem => elem.removeAttribute("style"));
        }
        reset();
        let input1 = document.querySelector(".field #pass-one").value;
        let input2 = document.querySelector(".field #pass-two").value;
        input1 ==  input2 ? check(): wrong();
    });

})();

