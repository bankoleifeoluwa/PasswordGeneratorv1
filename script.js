let current = ''


const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".range-box .slider-number");
const generateButton = document.querySelector(".generate-button");
const saveButton = document.querySelector(".save-button");

let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";

const generatePassword = () => {
  let newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    let randomNumbers = Math.floor(Math.random() * allCharacters.length);
    newPassword += allCharacters[randomNumbers];
  }
  passwordInput.value = newPassword;
  copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //replace icon
  current = newPassword
  console.log(current)
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePassword();
});


//copy passInput's value on copyIcon click
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replace icon
});

generatePassword();
generateButton.addEventListener("click", generatePassword);
saveButton.addEventListener("click", store);

function store() { //stores items in the localStorage
//  window.localStorage.removeItem("pass")
let passText = current
  console.log('hit')
  window.localStorage.setItem("pass", passText);
  //converting object to string
  console.log('saved!')
}