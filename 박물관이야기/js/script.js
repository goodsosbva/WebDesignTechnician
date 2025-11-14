function solution() {
  const subAtag = document.querySelectorAll(".menu a");
  console.log(subAtag);

  subAtag.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      const subUl = item.nextElementSibling;
      if (subUl) {
        subUl.classList.add("show");
      }
    });
    item.addEventListener("mouseout", function () {
      const subUl = item.nextElementSibling;
      if (subUl) {
        subUl.classList.remove("show");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", solution);
