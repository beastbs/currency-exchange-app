import "@src/scss/index.scss";
import currencyService from "@services/currency.service";

async function getCurrList(){
	const result = await currencyService.getCurrencyList()
	console.log(result);
}
// getCurrList()