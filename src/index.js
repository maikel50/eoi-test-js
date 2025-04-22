const button = document.querySelector("button");
button.addEventListener("click", () => {
  const num = Math.floor(Math.random * 6) + 1;
  alert(`numero: ${num}`);
});
