const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const entries = new FormData(event.target);
	const { dividend, divider } = Object.fromEntries(entries);

	const dividendAsNum = parseInt(dividend);
	const dividerAsNum = parseInt(divider);

	if (dividend === "" || divider === "") {
		result.innerText = "Division not performed. Both values are required in inputs. Try again"

	} else if (isNaN(dividend) || isNaN(divider)) {
		document.body.innerHTML = /* html */ `
		Something critical went wrong. Please reload the page.
		`;
		throw new Error("Something critical went wrong. Please reload the page");

	} else if (dividerAsNum < 0) {
		result.innerText = "Division not performed. Invalid number provided. Try again"
		throw new Error("Division not performed. Invalid number provided. Try again");

	} else {
		result.innerText = Math.floor(dividend / divider);
	}

});