/* globals $ */

/* 
Create a function that takes an id or DOM element and:
  
*/

function solve() {
    return function(selector) {

        if (selector === undefined) {
            throw Error();
        }

        if (typeof selector !== 'string') {
            throw Error();
        }

        var elementId = selector;
        if (selector instanceof HTMLElement) {
            elementId = selector.id;
        }
        var domElement = document.getElementById(elementId);
        if (domElement === null) {
            throw Error();
        }

        var butt = document.getElementsByClassName('button');
        var content = document.getElementsByClassName('content');

        for (var i = 0, len = butt.length; i < len; i += 1) {
            butt[i].innerHTML = "hide";
        }

        function onItemClick(ev) {
            var item = ev.target;

            var nextItem = item.nextElementSibling;
            if (nextItem instanceof HTMLAnchorElement) {
                nextItem = nextItem;

            } else {
                nextItem = nextItem.nextElementSibling;

            }
            if (nextItem.className === "content") {
                if (nextItem.style.display === '') {
                    nextItem.style.display = "none";
                    item.innerHTML = "show";
                } else {
                    nextItem.style.display = '';
                    item.innerHTML = "hide";
                }

            }
        }

        for (var i = 0; i < butt.length; i++) {
            butt[i].addEventListener('click', onItemClick, false);
        }
    }
}
module.exports = solve;