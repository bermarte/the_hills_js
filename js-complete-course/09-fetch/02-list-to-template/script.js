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


    tmpl = document.getElementById("tpl-hero");
    target = document.getElementById("target");

    document.getElementById("run").addEventListener("click", function () {

        fetch(url)
            .then(function (response) {
                return response.json();

            })

            .then(function (data) {
                howMany = data.heroes.length;
                data.heroes.forEach((element, index) => {

                    target.appendChild(tmpl.content.cloneNode(true));
                    document.querySelectorAll(".name")[index].innerHTML = element.name;
                    document.querySelectorAll(".alter-ego")[index].innerHTML = element.alterEgo;
                    document.querySelectorAll(".powers")[index].innerHTML = element.abilities;

                });
            })
    })
})();

