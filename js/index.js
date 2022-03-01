const navBtnCon = document.getElementById("navBtnCon");
const navBtns = navBtnCon.getElementsByClassName("navBtn");

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
