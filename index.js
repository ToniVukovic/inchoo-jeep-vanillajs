var acc = document.querySelector(".accordion");

acc.addEventListener("click", function () {
  this.classList.toggle("active");
  var svgIcon = this.querySelector(".svg-icon");

  var panel = this.nextElementSibling;
  if (panel.style.display === "flex") {
    panel.style.display = "none";
  } else {
    panel.style.display = "flex";
  }

  svgIcon.classList.toggle("active");
});
