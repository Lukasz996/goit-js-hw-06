let counterValue = 0;
const valueElement = document.getElementById('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', () => {
  counterValue--;
  valueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  valueElement.textContent = counterValue;
});