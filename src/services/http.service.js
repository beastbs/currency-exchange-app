import axios from "axios";
import configFile from "@config/api_endpoint";

const http =  axios.create({
	baseURL: configFile.monoApiEndpoint,
})

// http.interceptors.response.use(
// 	async function(config){
// 		console.log(config)

// 		return config;
// 	},
// 	function(error){
// 		Promise.rejected(error);
// 	}
// )

const httpService = {
	get: http.get
}

export default httpService;