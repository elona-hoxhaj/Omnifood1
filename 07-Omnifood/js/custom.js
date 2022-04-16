// console.log("Pershendetje nga PBCA");

let result = {
    firstName: "Elona",
    lastName: "Hoxhaj"
};

let firstName = result.firstName;
let lastName = result.lastName;

let fullName = firstName + " " + lastName;

let dbFullName;

// console.log(fullName);

// let header = document.getElementsByClassName("open-nav");

let header = document.querySelector(".hero-heading-description");

header.addEventListener("mouseover", function () {
    // header.textContent = fullName;
    header.style.backgroundColor = "rgb(230 126 34 /10%)";
    // header.style.padding = "2rem";
    // dbfullName = header.textContent;
    // console.log(dbFullName);
});

// console.log(header);

let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector("#header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function () {
    navHeader.classList.toggle("open-nav");
});


let date = document.querySelector(".copyright .year");
let dataAktuale = new Date().getFullYear();

console.log(date);
date.textContent = dataAktuale;


let btnClick = document.querySelector(".btn");

btnClick.addEventListener("click", function () {
    btnClick.classList.toggle("btn-click");
});