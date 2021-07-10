count display = document.getElementById("display")
count plusButton = document.getElementById("plus-button")

let count = 0

plusButton.oneclick = function() {
    count += 1
    display.textContent = count
}