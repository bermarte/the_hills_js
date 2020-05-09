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

        .then((data) => {
            document.getElementById("run").addEventListener("click", function () {

                var heroName = document.getElementById("hero-name").value;
                var alterEgo = document.getElementById("hero-alter-ego").value;
                var Powers = document.getElementById("hero-powers").value;

                if (heroName != "" && alterEgo != "" && Powers != "") {
                    /*
                    if (typeof num === 'undefined') {
                        num = data.heroes.length;
                    }
                    num++;
                    */

                    newHero = {
                        'id': data.heroes.length + 1,
                        'name': heroName,
                        "alterEgo": alterEgo,
                        "abilities": Array.from(Powers.split(","))
                    };
                    var array = data.heroes;
                    array.push(newHero);
                    console.log(array);
                } else {
                    console.log("empty fields");
                }
            })
        })

})();

