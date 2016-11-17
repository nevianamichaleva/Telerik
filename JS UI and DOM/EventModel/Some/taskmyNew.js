var butt = document.querySelectorAll(".button");
var content = document.querySelectorAll(".content");

for (var i = 0; i < butt.length; i++) {
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
        if (nextItem.style.visibility === "visible") {
            nextItem.style.visibility = "hidden";
            item.innerHTML = "show";
        } else {
            nextItem.style.visibility = "visible";
            item.innerHTML = "hide";
        }

    }
}

for (var i = 0; i < butt.length; i++) {
    butt[i].addEventListener('click', onItemClick);
}