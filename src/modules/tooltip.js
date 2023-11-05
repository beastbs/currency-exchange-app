import "@scss/modules/_tooltip.scss";

const tooltipTemplate = (text) => {
	return `
		<div class="tooltip"">
			<div class="tooltip__text">${text}</div>
		</div>
	`
}

const showTooltip = (container, text) => {
	container.style.position = "relative";
	container.insertAdjacentHTML("afterbegin", tooltipTemplate(text));
	setTimeout(() => {
		container.firstElementChild.remove();
		container.style.position = "static";
	}, 1000);
}

export default showTooltip;