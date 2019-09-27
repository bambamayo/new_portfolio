//Showing and hiding work details
let toggleKeyShow = document.querySelectorAll(".project-info--show");

let toggleKeyHide = document.querySelectorAll(".project-info--hide");

let toggleParagraph = document.querySelectorAll(".project-info--toggle");

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
