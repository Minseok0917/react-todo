import { useState } from 'react';
import calendarPackage,{ 
	getDate,
	nextMonthPackage,
	prevMonthPackage
} from './utils';

const maxDayCount = 42;
const prevMonthBlock = ({monthFirstDayOfWeekNumber,prevMonthLastDay}) => {
	// prevMonthLastDay-monthFirstDayOfWeekNumber+idx+1
	return Array(monthFirstDayOfWeekNumber).fill().map( (_,idx) => (
		<p>{prevMonthLastDay-idx}</p>
	)).reverse();
};
const currentMonthBlock = ({monthLastDay}) => {
	return Array(monthLastDay).fill().map((_,idx)=>(
		<p>{idx+1}</p>
	));
};
const nextMonthBlock = ({monthFirstDayOfWeekNumber,prevMonthLastDay}) => {
	const nextDayCount = maxDayCount-monthFirstDayOfWeekNumber-prevMonthLastDay;
	return Array(nextDayCount).fill().map((_,idx)=>(
		<p>{idx+1}</p>
	));
}



 export default function(){
 	// variable
 	const today = getDate();
 	const [state,setState] = useState({
 		...calendarPackage(today)
 	});
 	const { selectDate } = state;


 	// event methods
 	const nextMonthHandle = () => setState({
 		...nextMonthPackage(selectDate)
 	});
 	const prevMonthHandle = () => setState({
 		...prevMonthPackage(selectDate)
 	});


 	return(
 		<div className="calendar">
 			{state.selectDate}
		 	{prevMonthBlock(state)}
		 	{currentMonthBlock(state)}
		 	{nextMonthBlock(state)}
 		</div>
 	);
 }

