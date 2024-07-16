const algoList = Array.from(document.querySelectorAll(".dropdown div"))

for (let ali of algoList) {
    ali.addEventListener("click", function() {
        $(ali.getElementsByTagName("dd")[0]).slideToggle()
    })
}