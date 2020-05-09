/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var source = document.getElementById("source");
    var attr = source.getAttribute("data-image");
    console.log(attr);
    var img = document.createElement("img");
    img.src = attr;
    var target = document.getElementById("target");
    target.appendChild(img);
    source.parentNode.removeChild(source);
})();
