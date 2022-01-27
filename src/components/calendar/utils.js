export const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const weeks = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

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

export const YYYYMMDD = function(dateValue){
	const date = new Date(dateValue)
	const year = date.getFullYear();
	const month = date.getMonth();
	const $month = ('0'+(month+1)).slice(-2);
	const day = date.getDate();
	return {
		YYYYMM:`${year}${$month}`,
		$YYYYMMDD:`${year}-${$month}-${day}`,
		monthName:months[month],
		year,
		month,
		day,
	};
}


const calendarPackage = (dateValue = new Date())=> ({
	selectDate:YYYYMMDD(dateValue),
	prevMonth:YYYYMMDD(prevMonth(dateValue)),
	nextMonth:YYYYMMDD(nextMonth(dateValue)),
	monthFirstDayOfWeekNumber:monthFirstDayOfWeekNumber(dateValue),
	monthLastDay:monthLastDay(dateValue),
	prevMonthLastDay:monthLastDay(
		prevMonth(dateValue)
	),
})
export const nextMonthPackage = (dateValue) => calendarPackage(nextMonth(dateValue));
export const prevMonthPackage = (dateValue) => calendarPackage(prevMonth(dateValue));
export default calendarPackage;