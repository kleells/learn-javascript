let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // set the count back to 0
    countEl.textContent = 0
    // set the count to zero or the count with keep adding +1 from last save click
    count = 0
}

