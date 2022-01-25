import dayjs from 'dayjs';


export const today = function(){
	return dayjs().format('YYYY-MM-DD');
}

export const monthFirstDayOfWeekNumber = function(date){
	const monthFirstDay =  new Date(date);
	monthFirstDay.setDate(1);
	return monthFirstDay.getDay();
}

export const monthLastDay = function(date){
	const monthLastDay =  new Date(date);
	monthLastDay.setMonth(monthLastDay.getMonth()+1);
	monthLastDay.setDate(0);
	return monthLastDay.getDate();
}


export default {
	today,
	monthFirstDayOfWeekNumber,
	monthLastDay
}