let pr = new Promise((res, rej) => {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 15)
        randomNum > 7 ? res(`It is resolved ${randomNum}`) : rej(`It is rejected ${randomNum}`)
    }, 3000)
})

// pr.then((value) => {
//     console.log(value)
// }).catch((value) => {
//     console.log(value)
// })



async function abcd() {
    try {
        let val = await pr
        console.log(val)

    } catch (err) {
        console.log(err)
    }
}

abcd()

