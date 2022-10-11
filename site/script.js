document.addEventListener('DOMContentLoaded', main);
let btn = document.getElementsByClassName('button');

function main() {
    for (let i of btn) {
        i.addEventListener("click", show);
    }
    
    function show(event) {
        let tg = event.target;
        let ul = tg.previousElementSibling;
        ul.hidden = !ul.hidden;
        ul.style.transition = "3s";
        if (!ul.hidden) tg.style.transform = "rotate(225deg)";
        else tg.style.transform = "rotate(45deg)";
    }
}  
