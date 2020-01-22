// Variables
let toggleKeyShow = document.querySelectorAll(".project-info--show");
let toggleKeyHide = document.querySelectorAll(".project-info--hide");
let toggleParagraph = document.querySelectorAll(".project-info--toggle");
let menuBar = document.querySelector(".header__bar");
let nav = document.querySelector(".nav");
let navBar = document.querySelector(".nav__bar");
let navListItems = document.querySelectorAll(".nav-list-item");

//Toggle menu bar state
menuBar.addEventListener("click", function() {
  nav.classList.add("nav-show");
  menuBar.classList.add("header__bar-hide");

  navListItems.forEach(item => {
    nav.classList.contains("nav-show")
      ? item.classList.add("nav-list-item-show")
      : null;
  });
});

//Toogle nav bar and nav state
navBar.addEventListener("click", function() {
  nav.classList.remove("nav-show");
  menuBar.classList.remove("header__bar-hide");

  navListItems.forEach(item => {
    nav.classList.contains("nav-show")
      ? null
      : item.classList.remove("nav-list-item-show");
  });
});

//Close Nav when a link is clicked
navListItems.forEach(item => {
  item.addEventListener("click", function() {
    nav.classList.remove("nav-show");
    menuBar.classList.remove("header__bar-hide");
  });
});

//Showing and hiding work details
toggleKeyShow.forEach((key, i) => {
  key.addEventListener("click", e => {
    let pos = i;
    toggleParagraph[pos].classList.remove("project-info--toggle-hide");
    toggleParagraph[pos].classList.add("project-info--toggle-show");
    toggleKeyShow[pos].style.display = "none";
  });
});

toggleKeyHide.forEach((key, i) => {
  key.addEventListener("click", e => {
    let pos = i;
    toggleParagraph[pos].classList.remove("project-info--toggle-show");
    toggleParagraph[pos].classList.add("project-info--toggle-hide");
    toggleKeyShow[pos].style.display = "inline-block";
  });
});
