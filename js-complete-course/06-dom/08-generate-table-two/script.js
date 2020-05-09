/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let nRows = 10;
    let nCells = 10;
    let target = document.querySelector("#target");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let i = 0; i < nRows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < nCells; j++) {
            let td = document.createElement("td");
            let multiplications = document.createTextNode((j+1)*(i+1));
            td.appendChild(multiplications);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    target.appendChild(table);

})();
