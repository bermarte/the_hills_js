/*
* coded by leny@BeCode
* started at 09/05/2019
*/

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
        window.lib.getPersons()
            .then(function (persons) {
                    console.log(persons);
                }
            )
            .catch(function (error) {
                console.log(error.message);
            });
    });
})
();