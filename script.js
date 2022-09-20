const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close");
const continueButton = document.querySelector("#continue");

closeButton.addEventListener("click", (e) => {
    e.preventDefault()
  modal.classList.toggle("display-none");
});
