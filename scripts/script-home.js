const arr = [];
do {
    // arr.length=0
    // Generating random number
    const randomNumber = Math.floor(Math.random() * (courses.length - 1)) + 1;

    // Pushing into the array only
    // if the array does not contain it
    if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
    }
} while (arr.length < 3);

var IM1 = document.getElementById("I1"),
    IM2 = document.getElementById("I2"),
    IM3 = document.getElementById("I3");

IM1.setAttribute("src", courses[arr[0]].image);
IM2.setAttribute("src", courses[arr[1]].image);
IM3.setAttribute("src", courses[arr[2]].image);

var T = document.querySelectorAll(".Title"),
    C = document.querySelectorAll(".Category"),
    P = document.querySelectorAll(".Price");

document.querySelectorAll(".Title").innerHTML = courses[arr[0]].title;
document.querySelectorAll(".Category").innerHTML = courses[arr[0]].category;
document.querySelectorAll(".Price").innerHTML = courses[arr[0]].price;

for (i = 0; i < 3; i++) {
    T[i].innerHTML = courses[arr[i]].title;
    C[i].innerHTML = courses[arr[i]].category;
    P[i].innerHTML = courses[arr[i]].price;
}
var btn1 = document.querySelector(".btnCL");
var btn2 = document.querySelector(".btnCL2");
btn1.addEventListener("click", (event) => {
    window.location.href = "courses.html";
});
btn2.addEventListener("click", (event) => {
    window.location.href = "courses.html";
});
