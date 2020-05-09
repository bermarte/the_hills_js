/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let posts, comment;

    document.getElementById("run").addEventListener("click", function () {

        window.lib.getPosts(function (error, articles) {
            posts = articles;
            posts.forEach(function (post) {

                window.lib.getComments(null, function (error, getComments) {
                    comment = getComments[post.id];
                    if (comment !== undefined) {

                        post.comment = comment;

                    }
                    console.log(post);
                })
            })
        })
    })

})();