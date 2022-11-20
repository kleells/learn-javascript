let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    // countEl.innerText = count <-- like line 13-14, this is changed to utilize .textContent
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    // saveEl.innerText += countStr <-- this can be changed to a .textContent to show spaces added to countStr string and render prettier
    saveEl.textContent += countStr
}

// Google:
// innerText alternative mdn
