import { useParams } from 'react-router-dom';
import Todo from '../../components/todolist';

export default function(props){
	const params = useParams();
	return (
		<section>
			<Todo date={params.date} />
		</section>
	);
}