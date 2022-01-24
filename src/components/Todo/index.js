import { useState } from 'react';
import AddInput from './AddInput';
import TodoList from './TodoList';



export default function(){
	const [state,setState] = useState({
		todo:[]
	});

	const isValidTodo = (tname) => {
		const isName = state.todo.some( ({name}) => name === tname );
		const isLength = tname.length === 0;
		return (isName || isLength);
	};

	const addTodo = function(item){
		if( isValidTodo(item.name) ) return false;
		item.idx = state.todo.length;
		state.todo = [...state.todo,item];
		setState(state);
		return true;
	}
	
	return (
		<div className="todo">
			<AddInput addTodo={addTodo} />
			<TodoList />
		</div>
	);
}