const handlerToggleClassActive = (event) => {
	const inputParentNode = event.target.parentNode;
	inputParentNode.classList.toggle("currency-block__amount-active");
}

export {
	handlerToggleClassActive
}