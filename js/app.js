const bars = document.querySelectorAll(".bar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  if (bars[0].classList.contains("one")) {
    setTimeout(() => bars[0].classList.remove("one"), 700);
  } else {
    bars[0].classList.add("one");
  }
  if (bars[1].classList.contains("two")) {
    setTimeout(() => bars[1].classList.remove("two"), 700);
  } else {
    bars[1].classList.add("two");
  }
  if (bars[2].classList.contains("three")) {
    setTimeout(() => bars[2].classList.remove("three"), 700);
  } else {
    bars[2].classList.add("three");
  }
  if (bars[0].classList.contains("one-rotate")) {
    bars[0].classList.remove("one-rotate");
    bars[2].classList.remove("three-rotate");
  } else {
    setTimeout(() => {
      bars[0].classList.add("one-rotate");
      bars[2].classList.add("three-rotate");
    }, 700);
  }
});
