const container = document.querySelectorAll("span");

container.forEach((item) => {
  item.addEventListener("click", () => {
    // adds the animation on clicking, by assigning active class when clicked
    item.classList.toggle("active");
  });
});
