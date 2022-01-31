import { useState, useEffect, createRef } from 'react';
import './index.css';

const getIdx = (() => {
	let idx = 0;
	return () => idx++;
})();
const addTodo = (title,status)=>({
	title,
	status,
	idx:getIdx(),
});


export default function(){
	// variable
	const [state,setState] = useState([
		addTodo('1','todo'),
		addTodo('2','todo'),
		addTodo('3','todo'),
		addTodo('4','todo'),
		addTodo('5','process'),
		addTodo('6','close'),
		addTodo('7','process'),
	]);
	const [todo,setTodo] = useState({
		isDown:false,
		sIdx:false,
		sElement:{},
		down:{},
	});
	const categorys = state.reduce((acc,todoItem)=>({
		...acc,
		[todoItem.status]:[...acc[todoItem.status] ?? [],todoItem]
	}),{});

	// global event 
	const globalMouseMoveHandle = function(e){
		if( !todo.isDown ) return;
		todo.sElement.style.border = `1px solid #bbb`;
		todo.sElement.style.transform = `translate(${e.pageX - todo.down.x}px,${e.pageY - todo.down.y}px)`;
		// todo.sElement
	};
	const globalMouseUpHandle = function(){
		if( !todo.isDown ) return;
		todo.sElement.style.transform = `translate(0px,0px)`;
		todo.sElement.style.transition = '0.5s';
		setTimeout(()=>{
			todo.sElement.removeAttribute('style');
		},500);
		todo.isDown = false;
		todo.sIdx = false;
		todo.down = {};
	};
	const todoItemMouseDownHandle = function(e,todoItem,$element){
		todo.isDown = true;
		todo.sIdx = todoItem.idx;
		todo.down.x = e.pageX;
		todo.down.y = e.pageY;
		todo.sElement = $element;
	}
	// lifecycle
	const mount = function(){
		window.addEventListener('mousemove',globalMouseMoveHandle);
		window.addEventListener('mouseup',globalMouseUpHandle);
		return unmount;
	}
	const unmount = function(){
		window.removeEventListener('mousemove',globalMouseMoveHandle);
		window.removeEventListener('mouseup',globalMouseUpHandle);
	}
	useEffect(mount);


	// component 
	const $todoItem = (todoItem,idx) => {
		const $element = createRef()
		return (
			<div className="item" ref={$element} key={idx} onMouseDown={(e)=>todoItemMouseDownHandle(e,todoItem,$element.current)}>
				{todoItem.title}
			</div>
		);
	}
	return (
		<section>
			<div className="drag-container">
				<div className="area" data-type="todo">
					{ categorys.todo.map($todoItem) }
				</div>				
				<div className="area" data-type="process">
					{ categorys.process.map($todoItem) }
				</div>				
				<div className="area" data-type="close">
					{ categorys.close.map($todoItem) }
				</div>				
			</div>
		</section>
	);
}