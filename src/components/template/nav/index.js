import './index.css';
import { NavLink } from "react-router-dom";
import {
	FaBookmark,
	FaRegBookmark,
	FaRegCalendar,
	FaCalendar,
	FaRegFolder,
	FaFolder
} from 'react-icons/fa';


export default function(){
	return(
		<nav>
			<div className="logo-block">
				<h1>
					TD
				</h1>
			</div>
			<div className="menu-block">
				<div className="item">
					<NavLink to="/">
						<FaRegBookmark size="32px" fill="#fff" />
						<FaBookmark size="32px" fill="#fff" />
					</NavLink>					
				</div>
				<div className="item">
					<NavLink to="/calendar" >
						<FaRegCalendar size="32px" fill="#fff" />
						<FaCalendar size="32px" fill="#fff" />
					</NavLink>
				</div>
				<div className="item">
					<NavLink to="/statistic">
						<FaRegFolder size="32px" fill="#fff" />
						<FaFolder size="32px" fill="#fff" />
					</NavLink>
				</div>
			</div>
		</nav>
	);
}