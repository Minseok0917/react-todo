import {
	Routes,
	Route
} from 'react-router-dom';
import {
	Home,
	Calendar,
	Statistic
} from '../views/'


export default function(){
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/calendar" element={<Calendar />} />
			<Route path="/statistic" element={<Statistic />} />
		</Routes>
	);
}