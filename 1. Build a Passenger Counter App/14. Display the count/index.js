let countEl = document.getElementById("count-el")

console.log(countEl)

// intialize the count as 0
let count = 0

// listen for clicks on the increment button
function increment() {
    console.log('clicked')
    // increment the count variable when the button is clicked
    count = count + 1
    // change the count-el in the HTML to reflect the new count
        // Starts with creating countEl variable in line 1
    countEl.innerText = count
    console.log(count)
}
