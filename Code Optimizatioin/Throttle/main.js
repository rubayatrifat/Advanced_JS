const input = document.querySelector("#input")

function throttle(func, delay) {
    let timer = 0
    return function (evt) {
        let now = Date.now()
        if (now - timer >= delay) {
            timer = now
            func(evt)
        }
    }
}

input.addEventListener("input", throttle(function(evt){
    console.log(evt.target.value)
}, 5000))

