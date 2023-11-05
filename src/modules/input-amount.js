import {
  handleToggleClassActive,
  handleCopyInputValueListener,
} from "@modules/listener-events";

const currencyConverterBlock = document.querySelector(".currency-converter");
const inputAmountList = currencyConverterBlock.querySelectorAll(".currency-block__input-amount");
const copyAmountIcons = currencyConverterBlock.querySelectorAll(".currency-block__copy");

copyAmountIcons.forEach((copyIcon) => {
  copyIcon.addEventListener("click", handleCopyInputValueListener);
});

inputAmountList.forEach((input) => {
  input.addEventListener("focus", handleToggleClassActive);
  input.addEventListener("blur", handleToggleClassActive);
  // input.addEventListener("input", (event) => {
  // 	const currentInput = event.target.closest(".currency-block__input-amount")
  // 	currentInput.type = "text";
  // 	currentInput.value = formatNumberWithCommas(event.target.value);
  // })
});

// function formatNumberWithCommas(number){
// 	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
