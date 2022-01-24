import { useState } from 'react';
import AddInput from './AddInput';
import TodoList from './TodoList';



export default function(){
	const [state,setState] = useState({
		todo:[]
	});

	const addTodo = function(item){
		state.todo = [...state.todo,item];
		setState(state);
	}
	
	return (
		<div className="todo">
			<AddInput addTodo={addTodo} />
			<TodoList />
		</div>
	);
}