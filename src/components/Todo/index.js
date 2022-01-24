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

	const todoCore = {
		addTodo:function(addItem){
			if( isValidTodo(addItem.name) ) return false;
			addItem.idx = state.todo.length;
			state.todo = [...state.todo,addItem];
			setState(state);
			return true;
		},
		removeTodo:function(removeItem){
			state.todo = state.todo.filter( item => removeItem !== item );
			setState(state);
		},
	}
	
	return (
		<div className="todo">
			<AddInput addTodo={todoCore.addTodo} />
			<TodoList todos={state.todo} />
		</div>
	);
}