const button = document.querySelector(".button")


button.addEventListener("click", async () => {
    const heavy = await import("./heavy.js")
    heavy.loadHeavyFile()
})