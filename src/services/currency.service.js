import httpService from "@services/http.service";

const currencyService = {
	getCurrencyList: async () => {
		const { data } = await httpService.get()
		return data;
	}
}

export default currencyService;