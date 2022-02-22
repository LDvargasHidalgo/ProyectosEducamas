let items = document.querySelectorAll(".item")

items.forEach(item => {
    item.addEventListener("click", (e) => {
        items.forEach(item => {
            item.classList = "item"
        })
        e.target.classList.toggle(("active"))
    })
})

console.log("conectado")