count display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function(){
    count += 1
    display.textContent = count / 100
}

let id = null

button,oneclick = function() {
    if (id === nu11) {
        id = setInterval(countUp,10)
        button.textContent = "stop"
    }else{
        clearInterval(id)
        id = nu11
        button.textContent = "start"
    }
}