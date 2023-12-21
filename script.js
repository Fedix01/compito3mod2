let myBtn = document.querySelectorAll(".btn");
console.log(myBtn);
let content = document.querySelector(".container");


myBtn.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.remove()
    })
});


