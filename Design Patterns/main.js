// Module Pattern
// IIFE

let bankActions = (function () {
    let currentBalence = 10000  // Private Variable

    function checkBalance() {
        console.log(currentBalence)
    }

    function setBalance(val) {
        currentBalence += val
        console.log(`Your current balance is ${currentBalence}`)
    }

    function withDraw(val) {
        if (val <= currentBalence) {
            currentBalence -= val
            console.log(`Your current balance is ${currentBalence}`)
        }
    }

    return {
        checkBalance,
        setBalance,
        withDraw
    }
})()


bankActions.withDraw(4356)