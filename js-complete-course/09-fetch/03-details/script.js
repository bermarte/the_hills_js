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


    document.getElementById("run").addEventListener("click", function () {

        fetch(url)
            .then(function (response) {
                return response.json();

            })

            .then( (data) => {
                var index = document.getElementById("hero-id").value;
                len = data.heroes.length;

                if (index !=="" && index <= len && index !== "0"){
                    const target = document.getElementById("target");
                    const tmpl = document.getElementById("tpl-hero");
                    let clone = tmpl.content.cloneNode(true);
                    clone.querySelector(".name").innerText = data.heroes[index-1].name;
                    clone.querySelector(".alter-ego").innerText = data.heroes[index-1].alterEgo;
                    clone.querySelector(".powers").innerText = data.heroes[index-1].abilities;
                    target.appendChild(clone);
                }
                else{
                    console.log("no data found");
                }
            });
    })
})();


