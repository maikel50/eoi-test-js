const dado = document.querySelector(".dado");
dado.addEventListener("click", function () {
  const num = Math.floor(Math.random() * 6) + 1;
  dado.textContent = num;
});
