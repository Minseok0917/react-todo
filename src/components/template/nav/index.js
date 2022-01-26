import './index.css';
import { Link } from "react-router-dom";


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
					<Link to="/">홈</Link>					
				</div>
				<div className="item">
					<Link to="/calendar">달력</Link>
				</div>
				<div className="item">
					<Link to="/statistic">통계</Link>
				</div>
			</div>
		</nav>
	);
}