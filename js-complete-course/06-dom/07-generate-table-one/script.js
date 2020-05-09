/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
    let nRows = 1;
    let nCells = 10;
    let target = document.querySelector("#target");
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let i = 0; i < nRows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < nCells; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    target.appendChild(table);

})
();
