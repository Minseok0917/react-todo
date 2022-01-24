import { useState } from 'react';
import AddInput from './AddInput';
import TodoList from './TodoList';
import A from './a';



export default function(){
	const [count,setCount] = useState(0);
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
			setState({
				todos:[...state.todos,addItem]
			});
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
			<A count={count} />
			<button onClick={ ()=> setCount(count+1) }>addCount</button>
		</div>
	);
}