import showTooltip from "@modules/tooltip";

const handleToggleClassActive = (event) => {
  const inputParentNode = event.target.parentNode;
  inputParentNode.classList.toggle("currency-block__amount-active");
};

const handleCopyInputValueListener = async (event) => {
  const currentIcon = event.target.closest(".currency-block__copy");
  const input = currentIcon.previousElementSibling;
  const inputValue = input.value;
  input.focus();

  if (!inputValue) return;

  try {
    const copiedData = await navigator.clipboard.readText();
	 if(copiedData === inputValue){ return }
  } catch (error) {
    console.error(error);
  }
  
  navigator.clipboard.writeText(inputValue);
  showTooltip(currentIcon, "copied")

};

export { handleToggleClassActive, handleCopyInputValueListener };
