/* globals $ */

/* 
Create a function that takes an id or DOM element and an array of contents
* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

function solve() {

    return function(element, contents) {
        var currentElement,
            newDiv,
            currentDiv,
            docFragment,
            index,
            len,
            lastChild;

        if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
            throw new Error();
        }

        if (typeof element === 'string') {
            currentElement = document.getElementById(element);
        } else {
            currentElement = element;
        }

        if (!contents || contents.some(function(item) {
                return (typeof(item) !== 'string' && typeof(item) !== 'number');
            })) {
            throw new Error();
        }

        lastChild = currentElement.lastChild;
        while (currentElement.lastChild) {
            currentElement.removeChild(lastChild);
            lastChild = lastChild.nextSibling;

        }

        newDiv = document.createElement('div');
        docFragment = document.createDocumentFragment();

        for (index = 0, len = contents.length; index < len; index += 1) {
            currentDiv = newDiv.cloneNode(true);
            currentDiv.innerHTML = contents[index];
            docFragment.appendChild(currentDiv);
        }

        currentElement.appendChild(docFragment);
    };
};