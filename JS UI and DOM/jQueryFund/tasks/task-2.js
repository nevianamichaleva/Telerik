/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
    return function(selector) {
        if (typeof selector !== 'string' || $(selector).length === 0) {
            throw new Error("The function's parameter is not a valid parameter");
        }

        var $butt = $('.button');
        var $content = $('.content');
        $butt.text("hide");

        function onButtonClick() {
            var $this = $(this);

            var $nextContent = $this.nextAll('.content').first(),
                $nextBtn = $nextContent.nextAll('.button').first();

            if ($nextBtn.length && $nextContent.length) {
                if ($nextContent.css('display') === 'none') {
                    $nextContent.css('display', '');
                    $this.text('hide');
                } else {
                    $nextContent.css('display', 'none');
                    $this.text('show');
                }
            }
        }
        $butt.on("click", onButtonClick);
    };
}
module.exports = solve;