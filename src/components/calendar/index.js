import { useState } from 'react';
import './index.css';
import calendarPackage,{ 
	weeks,
	YYYYMMDD,
	nextMonthPackage,
	prevMonthPackage
} from './utils';

const maxDayCount = 42;
const prevMonthBlock = ({monthFirstDayOfWeekNumber,prevMonthLastDay}) => {
	// prevMonthLastDay-monthFirstDayOfWeekNumber+idx+1
	return Array(monthFirstDayOfWeekNumber).fill().map( (_,idx) => (
		<div className="body item prev-month" key={idx}>
			{prevMonthLastDay-idx}
		</div>
	)).reverse();
};
const currentMonthBlock = ({monthLastDay}) => {
	return Array(monthLastDay).fill().map((_,idx)=>(
		<div className="body item current-month" key={idx}>
			{idx+1}
		</div>
	));
};
const nextMonthBlock = ({monthFirstDayOfWeekNumber,prevMonthLastDay}) => {
	const nextDayCount = maxDayCount-monthFirstDayOfWeekNumber-prevMonthLastDay;
	return Array(nextDayCount).fill().map((_,idx)=>(
		<div className="body item next-month" key={idx}>
			{idx+1}
		</div>
	));
};



 export default function(){
 	// variable
 	const today = YYYYMMDD(new Date());
 	const [state,setState] = useState({
 		...calendarPackage()
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
 		<div className="calendar-app">
 			<div className="app-block calendar-container">
	 			<div className="item-container">
		 			{weeks.map( (week,idx) => 
		 				<div className="item head" key={idx}>{week}</div> 
		 			)}
	 				{prevMonthBlock(state)}
					{currentMonthBlock(state)}
					{nextMonthBlock(state)}
	 			</div>
 			</div>
 		</div>
 	);
 }

