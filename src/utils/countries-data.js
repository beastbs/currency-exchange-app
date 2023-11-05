import { countriesWithFlags } from "./countries-with-flags";
import { countryList } from "./country_list";
import axios from "axios";

const fbApi = "https://fb-data-pro-default-rtdb.europe-west1.firebasedatabase.app/";
const countryListNamesArr = Object.keys(countryList);
const result = [];

countryListNamesArr.forEach(name => {
	const item = countriesWithFlags.find(el => el.code === name);
	const newCurrencyObject = {
		code: name,
		...countryList[name],
		flag: item?.flag
	}

	result.push(newCurrencyObject)
})

console.log(result)

async function initialize(){

	try {
		for (const currency of result) {
			await axios.put(`${fbApi}/currency-list/${currency.code}.json/`, currency)
		}
	} catch (error) {
		console.error(error);
	}
}
// initialize()
