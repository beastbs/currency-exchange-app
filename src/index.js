import "@src/app";
import "@scss/index.scss";

import "./utils/countries-data";

import currencyService from "@services/currency.service";

async function getCurrList(){
	const result = await currencyService.getCurrencyList()
	console.log(result);
}
// getCurrList()

