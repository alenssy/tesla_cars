import {createColorData} from './script.js';

export class XHR{
    static async xhr(){
        return $.ajax({
            	url : 'https://raw.githubusercontent.com/brightestsirius/tesla/master/tesla.json',
            	cache: false,
            	method: 'GET',
            	success: data => {
					createColorData(JSON.parse(data));
				},
            	error: error => {
            		console.log(error);
            	}
            })
    }
}