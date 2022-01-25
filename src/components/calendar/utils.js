import dayjs from 'dayjs';


export const getDate = function(dateValue){
	return dayjs(dateValue).format('YYYY-MM-DD');
}

export const monthFirstDayOfWeekNumber = function(dateValue){
	const monthFirstDay =  new Date(dateValue);
	monthFirstDay.setDate(1);
	return monthFirstDay.getDay();
}

export const monthLastDay = function(dateValue){
	const monthLastDay =  new Date(dateValue);
	monthLastDay.setMonth(monthLastDay.getMonth()+1);
	monthLastDay.setDate(0);
	return monthLastDay.getDate();
}

export const nextMonth = function(dateValue){
	const month = new Date(dateValue);
	month.setMonth(month.getMonth()+1);
	return month;
}

export const prevMonth = function(dateValue){
	const month = new Date(dateValue);
	month.setMonth(month.getMonth()-1);
	return month;
}

export const YYYMMDD = function(dateValue){
	const date = new Date(dateValue)
	return {
		year:date.getFullYear(),
		month:date.getMonth()+1,
		day:date.getDate()
	};
}

export default (dateValue)=>({
	...YYYMMDD(dateValue),
	selectDate:getDate(dateValue),
	monthFirstDayOfWeekNumber:monthFirstDayOfWeekNumber(dateValue),
	monthLastDay:monthLastDay(dateValue)
})