let initialCount = document.querySelector(".initial-count");
let plusBtn = document.querySelector(".plus-btn");
let minusBtn = document.querySelector(".minus-btn");
let inputArea = document.querySelector(".input");

plusBtn.addEventListener("click", addOne);
minusBtn.addEventListener("click", minusOne);

let storeNumber;
let displayNumber = 0;

function addOne() {
  storeNumber = parseInt(inputArea.value);
  displayNumber = storeNumber + parseInt(initialCount.innerHTML);
  initialCount.innerHTML = displayNumber;
  changColor();
}

function minusOne() {
  storeNumber = parseInt(inputArea.value);
  displayNumber = parseInt(initialCount.innerHTML) - storeNumber;
  initialCount.innerHTML = displayNumber;
  changColor();
}

function changColor() {
  if (parseInt(initialCount.innerHTML) < 0) {
    initialCount.style.color = "red";
  } else {
    initialCount.style.color = "Black";
  }
}
