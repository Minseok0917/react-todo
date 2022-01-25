import dayjs from 'dayjs';


const weeks = `일월화수목금토`.split('');


export const today = function(){
	return dayjs().format('YYYY-MM-DD');
}

export const monthFirstDayOfWeekNumber = function(date){

}

export const monthLastDay = function(date){

}


export default {
	today,
	monthFirstDayOfWeekNumber,
	monthLastDay
}