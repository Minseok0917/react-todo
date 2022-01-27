import { useState } from 'react';
import './index.css';
import calendarPackage,{ 
	weeks,
	months,
	YYYYMMDD,
	nextMonthPackage,
	prevMonthPackage
} from './utils';

const maxDayCount = 42;
const prevMonthBlock = ({monthFirstDayOfWeekNumber,prevMonthLastDay}) => {
	// prevMonthLastDay-monthFirstDayOfWeekNumber+idx+1
	return Array(monthFirstDayOfWeekNumber).fill().map( (_,idx) => (
		<div className="body item prev-month" key={idx}>
			<p className="day">{prevMonthLastDay-idx}</p>
		</div>
	)).reverse();
};
const currentMonthBlock = ({monthLastDay}) => {
	return Array(monthLastDay).fill().map((_,idx)=>(
		<div className="body item current-month" key={idx}>
			<p className="day">{idx+1}</p>
		</div>
	));
};
const nextMonthBlock = ({monthFirstDayOfWeekNumber,monthLastDay}) => {
	console.log(monthFirstDayOfWeekNumber,monthLastDay);
	const nextDayCount = maxDayCount-monthFirstDayOfWeekNumber-monthLastDay;
	return Array(nextDayCount).fill().map((_,idx)=>(
		<div className="body item next-month" key={idx}>
			<p className="day">{idx+1}</p>
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
 		...nextMonthPackage(selectDate.$YYYYMMDD)
 	});
 	const prevMonthHandle = () => setState({
 		...prevMonthPackage(selectDate.$YYYYMMDD)
 	});

 	console.log(state);

 	return(
 		<div className="calendar-app">
 			<div className="app-block calendar-container">
 				<div className="title-container">
 					<div className="month-btn" onClick={prevMonthHandle}> ‹ </div>
 					<h2 className="title">
 						{ state.selectDate.monthName } { state.selectDate.year }
 					</h2>
 					<div className="month-btn" onClick={nextMonthHandle}> › </div>
 				</div>
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

