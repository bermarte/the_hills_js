/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    img = document.getElementsByTagName("img");
    var attr = img[0].getAttribute("data-hover");
    x =  img[0].src;
    img[0].addEventListener("mouseover", event => {
        img[0].src = attr;
    });
    img[0].addEventListener("mouseout", event => {
        img[0].src = x;
    });
})();
