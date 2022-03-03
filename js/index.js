// Nav
const navBtnCon = document.getElementById("navBtnCon");
const navBtns = navBtnCon.getElementsByClassName("navBtn");
// POPUP
const cassetteContainer = document.getElementById("cassetteContainer");
const cassetteP = document.getElementById("cassetteP");

if (window.location.href === "http://localhost:8000/index.php") {
  navBtns[0].classList.add("active");
} else if (window.location.href === "http://localhost:8000/exposition.php") {
  navBtns[1].classList.add("active");
} else if (window.location.href === "http://localhost:8000/exposition2.php") {
  navBtns[2].classList.add("active");
} else if (window.location.href === "http://localhost:8000/exposition3.php") {
  navBtns[3].classList.add("active");
} else if (window.location.href === "http://localhost:8000/contact.php") {
  navBtns[4].classList.add("active");
}

for (let i = 0; i < navBtns.length; i++) {
  let navBtnsPos = navBtns[i].getBoundingClientRect();
  navBtns[i].addEventListener("mouseenter", () => {
    setTimeout(() => {
      cassetteContainer.style.left = navBtnsPos.x - 28 + "px";
    }, 500);
    cassetteContainer.style.top = "100px";
    cassetteContainer.style.transition = "0.5s ease-in-out";
    if (i == 0) {
      cassetteP.innerHTML = "Acceuil";
    } else if (i == 1) {
      cassetteP.innerHTML = "expo 1";
    } else if (i == 2) {
      cassetteP.innerHTML = "expo 2";
    } else if (i == 3) {
      cassetteP.innerHTML = "expo 3";
    } else if (i == 4) {
      cassetteP.innerHTML = "Contact";
    }
  });
  navBtns[i].addEventListener("mouseleave", () => {
    cassetteContainer.style.top = "-250px";
  });
}
