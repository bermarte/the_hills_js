/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var dirs = window.location.pathname.split("/");
    url = window.location.origin + "/" + dirs[1] + "/" + dirs[2] + "/" + "_shared/api.json";

        fetch(url)
            .then(function (response) {
                return response.json();

            })

            .then( (data) => {
                document.getElementById("run").addEventListener("click", function () {
                var index = document.getElementById("hero-id").value;
                len = data.heroes.length;

                if (index !=="" && index <= len && index !== "0"){
                    console.log("data found");

                    array = data.heroes;
                    array.splice(index-1,1);
                    console.log(array);

                }
                else{
                    console.log("no data found");
                }
            });
    })
})();


