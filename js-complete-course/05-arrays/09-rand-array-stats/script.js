/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function () {

        //<section class="material"><table> <tr> <td id="n-1">-</td>
        do{
            sequence = Array.from({length: 10}, () => Math.floor(Math.random() * 100) + 1);
        }
        while (Array.from(new Set(sequence)).length < 10)

        console.log(sequence);

        let min = Math.min.apply(Math, sequence);
        let max = Math.max.apply(Math, sequence);
        let sum = sequence.reduce((a, b) => a + b, 0);
        let average = sum / sequence.length;

        table = document.getElementsByTagName("table")[0];
        var cell = table.getElementsByTagName("td");
        var cells = Array.from(cell);

        cells.forEach(function(item, index){
            item.innerHTML= sequence[index];
        });

        dl = document.getElementsByTagName("dl")[0];
        var dd = dl.getElementsByTagName("dd");
        var dds = Array.from(dd);

        console.log(dds);

        dds.forEach(function(item){
            item.innerHTML= eval(item.id);
        });
    });

})();
