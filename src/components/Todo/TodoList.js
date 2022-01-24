import TodoItem from './TodoItem';

export default function(props){
	return(
		<div className="todo-list">
			{ 
				props.todos.map( ({name}) => (
					<p key={name}>{name}</p>
				))
			}
		</div>
	);
}