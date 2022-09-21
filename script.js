const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close");
const form = document.querySelector('#form')
const continueButton = document.querySelector("#continue");
const feedback = form.elements['feedback'];
const response = document.querySelector('.container')

window.onload = () => {
  if(window.location.href.includes('feedback=')){
  console.log('fue enviado')
  modal.classList.toggle('display-none')
  response.firstElementChild.innerHTML = `El feedback fue: ${window.location.href.charAt(window.location.href.length - 1)}`
}}

closeButton.addEventListener("click", (e) => {
    e.preventDefault()
  modal.classList.toggle("display-none");
});

modal.addEventListener('submit', (e) => {
  e.preventDefault()
  modal.classList.toggle('display-none');
  window.location.replace(`./index.html?feedback=${feedback.value}`)
})
