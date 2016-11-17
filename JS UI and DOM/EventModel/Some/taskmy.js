var butt = document.querySelectorAll(".button");
var content = document.querySelectorAll(".content");
console.log(content[0].style.visibility);
for (var i = 0; i < butt.length; i++) {
    butt[i].innerHTML = "hide";
}

function OnButtonClick() {
    this.innerHTML = "show";

    for (var i = 0; i < content.length; i++) {
        if (content[i].nextElementSibling instanceof HTMLAnchorElement) {
            if (content[i].style.visibility == "hidden") {
                content[i].style.visibility = 'visible';
                this.innerHTML = "hide";
            } else {
                content[i].style.visibility = 'hidden';
            }
            break;
        }

    }
}
for (var i = 0; i < butt.length; i++) {
    butt[i].addEventListener('click', OnButtonClick);
}