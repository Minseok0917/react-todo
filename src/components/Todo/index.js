import { useState } from 'react';
import AddInput from './AddInput';
import TodoList from './TodoList';



export default function(){
	const [state,setState] = useState({
		todos:[]
	});

	const isValidTodo = (tname) => {
		const isName = state.todos.some( ({name}) => name === tname );
		const isLength = tname.length === 0;
		return (isName || isLength);
	};
	const getIdx = (() => {
		let idx = 0;
		return () => idx++;
	})()

	const todoCore = {
		addTodo:function(addItem){
			if( isValidTodo(addItem.name) ) return false;
			addItem.idx = getIdx();
			state.todos = [...state.todos,addItem];
			setState(state);
			return true;
		},
		removeTodo:function(removeItem){
			state.todos = state.todos.filter( item => removeItem !== item );
			setState(state);
		},
	}
	
	return (
		<div className="todo">
			<AddInput addTodo={todoCore.addTodo} />
			<TodoList todos={state.todos} />
		</div>
	);
}