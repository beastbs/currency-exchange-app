import { handlerToggleClassActive } from "@modules/listener-events";

const currencyConverterBlock = document.querySelector(".currency-converter");
const inputAmountList = currencyConverterBlock.querySelectorAll(".currency-block__input-amount");

inputAmountList.forEach(input => {
	input.addEventListener("focus", handlerToggleClassActive);
	input.addEventListener("blur", handlerToggleClassActive);
})