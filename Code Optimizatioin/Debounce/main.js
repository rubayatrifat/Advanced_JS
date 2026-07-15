const input = document.querySelector("#input")


function debounce(func, delay) {
    let timer
    return function(evt) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            func(evt)
        }, delay)
    }
}


input.addEventListener("input", debounce(function(evt){
    console.log(evt.target.value)
}, 1000))