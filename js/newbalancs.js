const button = document.querySelectorAll(".pictures button");
const big = document.querySelector(".pictures .bigsize img");

button.forEach((element) => {
element.addEventListener("click", (event) => {
    const isSrc = event.target.getAttribute("src"); 
    const isAlt = event.target.getAttribute("alt");
    button.forEach((item) => {
        item.classList.remove("--active");
    });

    event.target.parentElement.classList.add("--active");

    big.setAttribute("src", isSrc);
    big.setAttribute("alt",isAlt);
});
});