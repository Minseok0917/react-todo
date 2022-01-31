import './index.css';
import {
	FaGithub
} from 'react-icons/fa';

export default function(){
	return(
		<header>
			<div className="container">
				<a href="https://minseok0917.github.io/TIL/" target="_blank">TIL</a>
				<a href="https://github.com/Minseok0917" target="_blank">
					<FaGithub size="32px" fill="#000" />
				</a>
			</div>
		</header>
	);
}