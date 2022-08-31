let countDisplay = document.getElementById("count-display")
let entriesLog = document.getElementById("entries-log")
let count = 0

function increment () {
    count = count += 1
    countDisplay.textContent = count
}
 function save() {
    let countStr = count +  "-"
    entriesLog.textContent += countStr
    countDisplay.textContent = 0
    count = 0
 }