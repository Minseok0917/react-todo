const storage = localStorage;

export const getStorage = function(key){
	return JSON.parse(storage.getItem(key)) ?? [];
}

export const setStorage = function(key,value){
	storage.setItem(key,JSON.stringify(value));
}