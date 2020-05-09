/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var dirs = window.location.pathname.split("/");
    url = window.location.origin+"/"+dirs[1]+"/"+dirs[2]+"/"+"_shared/api.json";

    document.getElementById("run").addEventListener("click", function () {

        fetch(url)
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
                console.log(data);
            })
    })
})();
