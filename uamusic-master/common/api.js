import {baseUrl} from './config.js';
export function toplist(){
return new Promise(function(resolve,reject){
	uni.request({
		url: `${baseUrl}/toplist/detail`,
		method: 'GET',
		data: {},
		success: res => {
			 let result =	res.data.list;
			 resolve(result.splice(0,4));
		},
		fail: () => {},
		complete: () => {}
		});
	});
	}