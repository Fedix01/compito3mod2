let myBtn = document.querySelectorAll(".special");
console.log(myBtn);
let content = document.querySelector(".container");


myBtn.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.remove()
    })
});


