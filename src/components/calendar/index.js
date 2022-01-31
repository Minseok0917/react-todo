import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import calendarPackage,{ 
	weeks,
	months,
	YYYYMMDD,
	nextMonthPackage,
	prevMonthPackage
} from './utils';

const maxDayCount = 42;

const prevMonthBlock = ({monthFirstDayOfWeekNumber,prevMonthLastDay,selectDate}) => {
	// prevMonthLastDay-monthFirstDayOfWeekNumber+idx+1
	return Array(monthFirstDayOfWeekNumber).fill().map( (_,idx) => (
		<div className="body item prev-month" key={idx}>
			<p className="day">
				<Link to={`/calendar/${selectDate.YYYYMM}${ `0${prevMonthLastDay-idx}`.slice(-2) }`}>{prevMonthLastDay-idx}</Link>
			</p>
		</div>
	)).reverse();
};
const currentMonthBlock = ({monthLastDay,selectDate}) => {
	return Array(monthLastDay).fill().map((_,idx)=>(
		<div className="body item current-month" key={idx}>
			<p className="day">
				<Link to={`/calendar/${selectDate.YYYYMM}${ `0${idx+1}`.slice(-2) }`}>{idx+1}</Link>
			</p>
		</div>
	));
};
const nextMonthBlock = ({monthFirstDayOfWeekNumber,monthLastDay,selectDate}) => {
	const nextDayCount = maxDayCount-monthFirstDayOfWeekNumber-monthLastDay;
	return Array(nextDayCount).fill().map((_,idx)=>(
		<div className="body item next-month" key={idx}>
			<p className="day">
				<Link to={`/calendar/${selectDate.YYYYMM}${ `0${idx+1}`.slice(-2) }`}>{idx+1}</Link>
			</p>
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

