let form = document.querySelector('form');
let ul = document.querySelector('ul');
let input = document.getElementById('itemInput');

form.addEventListener("submit", addItem);
ul.addEventListener("click", buttonEvents);
filter.addEventListener("keyup", filterItems)

function addItem(e) {
    e.preventDefault();

    // Create new list element
    let li = document.createElement('li');

    // Create buttons
    var deleteBtn = document.createElement("button"),
        upBtn = document.createElement("button"),
        downBtn = document.createElement("button");

    // Giving new button classes
    deleteBtn.className = "delete";
    upBtn.className = "up";
    downBtn.className = "down";

    // Creating text in buttons
    deleteBtn.appendChild(document.createTextNode("X"))
    upBtn.appendChild(document.createTextNode("Up"))
    downBtn.appendChild(document.createTextNode("Down"))

    // Append button to li
    li.appendChild(deleteBtn);
    li.appendChild(upBtn);
    li.appendChild(downBtn);

    // Create text node
    let txt = document.createTextNode(input.value);

    // Append text to li
    li.appendChild(txt);

    //Append new li to ul
    ul.appendChild(li);

    // Empty input field after submitting 
    input.value = ""
}

function buttonEvents(e) {
    if (e.target.tagName == "BUTTON") {
        if (e.target.className == "delete") {
            if (confirm("Are you sure?")) {
                e.target.parentElement.style.display = "none";
            }
        }
        if (e.target.className == "up") {
            let li = e.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            // If prevLi is not null. The up will not work with the first li
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
        if (e.target.className == "down") {
            let li = e.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            // If prevLi is not null. The up will not work with the first li
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
    }
}