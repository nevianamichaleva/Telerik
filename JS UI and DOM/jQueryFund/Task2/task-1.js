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
        var $butt = $('.button');
        var $content = $('.content');
        $butt.html("hide");
        function onButtonClick() {
            var $currButton = $(this);
            var $nextitem = $currButton.next();
            if ($nextitem.hasClass("button")) {
                $nextitem = $nextitem;
            } else {
                $nextitem = $nextitem.next();
            }
            if ($nextitem.hasClass("content")){
               // console.log($nextitem.css("display"));
                if ($nextitem.css("display") === 'block') {
                   $nextitem.css("display", "none");
                    $currButton.html("show");
              } else {
                    $nextitem.css("display", "block");
                    $currButton.html("hide");
                }
          }
        }
        $butt.on("click", onButtonClick);
    }
}