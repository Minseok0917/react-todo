import { useState, useEffect, createRef } from 'react';
import './index.css';


/*

down
	- offset X
	- offset Y 
	x 의 거리
		- (right - left) / 2 
	y 의 거리 
		- (bottom - top) / 2 
	z 의 거리 
		(x1, y1)
		(x2, y2)
		x = (max(x1,x2)-min(x1,x2))**2
		y = (max(y1,y2)-min(y1,y2))**2
		Math.sqrt(x+y) 대각선의 길이 

*/

const getIdx = (() => {
	let idx = 0;
	return () => idx++;
})();
const addTodo = (title,status)=>{
	const idx = getIdx();
	return {
		title,
		status,
		idx,
		fidx:idx,
	}
};
const elementOptions = ({offsetLeft,offsetTop,offsetWidth,offsetHeight}) => {
	const left = offsetLeft;
	const right = left+offsetWidth;
	const top = offsetTop;
	const bottom = top+offsetHeight;
	const x = left+offsetWidth/2;
	const y = top+offsetHeight/2;
	return{
		width:offsetWidth,
		height:offsetHeight,
		left,
		right,
		top,
		bottom,
		x,
		y
	};
};
const distance = ($element1,$element2)=>{
	const { x:x1, y:y1 } = $element1;
	const { x:x2, y:y2 } = $element2;
	let [maxX,minX] = [x1,x2];
	let [maxY,minY] = [y1,y2];
	if( maxX < minX ) [maxX,minX] = [x2,x1];
	if( maxY < minY ) [maxY,minY] = [y2,y1];
	const x = maxX-minX;
	const y = maxY-minY;
	return Math.sqrt(x**2+y**2);
};
const isFocus = function(selectOption,refOptions){
	const isX = refOptions.width/2 > Math.abs(refOptions.x-selectOption.x);
	const isY = refOptions.height/2 > Math.abs(refOptions.y-selectOption.y);
	return isX && isY;	
};
const getPosDistance = function(selectOption,refOptions){
	const x = Math.abs(refOptions.x-selectOption.x);
	const y = Math.abs(refOptions.y-selectOption.y);
	return {x, y};
};


export default function(){
	let defaultArray = [
		addTodo('1','todo'),
		addTodo('2','todo'),
		addTodo('3','todo'),
		addTodo('4','todo'),
		addTodo('5','process'),
		addTodo('6','close'),
		addTodo('7','process'),
	];

	// variable
	const [state,setState] = useState(defaultArray);
	const [todo,setTodo] = useState({
		isDown:false,
		sIdx:false,
		sElement:{},
		down:{},
	});
	const categorys = state.reduce((acc,todoItem)=>({
		...acc,
		[todoItem.status]:[...acc[todoItem.status] ?? [],todoItem]
	}),{
		todo:[],
		process:[],
		close:[]
	});
	let $elements = [];

	// global event 
	const globalMouseMoveHandle = function(e){
		if( !todo.isDown ) return;
		const transformX = e.clientX - todo.down.x;
		const transformY = e.clientY - todo.down.y;
		const sOption = elementOptions(todo.sElement);
		sOption.x = sOption.x+transformX;
		sOption.y = sOption.y+transformY;

		
		todo.sElement.style.border = `1px solid #bbb`;
		todo.sElement.style.transform = `translate(${transformX}px,${transformY}px)`;


		$elements.filter( ({$element}) => $element != todo.sElement ).forEach( ({$element}) => $element.removeAttribute('style') );
		const foucsElement = $elements
			.filter( ({$element}) => $element != todo.sElement )
			.find( ({options}) => isFocus(sOption,options) )
		

		if( foucsElement ){
			foucsElement.$element.style.marginTop = '2rem';
		}

	};
	const globalMouseUpHandle = function(){
		if( !todo.isDown ) return;
		todo.sElement.style.transform = `translate(0px,0px)`;
		todo.sElement.style.transition = '0.125s';
		setTimeout(()=>{
			todo.sElement.removeAttribute('style');
		},125);
		todo.isDown = false;
		todo.sIdx = false;
		todo.down = {};
	};
	const todoItemMouseDownHandle = function(e,todoItem,$element){
		todo.isDown = true;
		todo.sIdx = todoItem.idx;
		todo.down.x = e.clientX;
		todo.down.y = e.clientY;
		todo.sElement = $element;

		$element.classList.add('active');
	}
	// lifecycle
	const mount = function(){
		let a1 = elementOptions($todoArea.current);
		let a2 = elementOptions($processArea.current);

		$elements = $elements.map( ({$element,idx}) => ({ // ref mount todoItem-value setting
			$element:$element.current,
			options:elementOptions($element.current),
			idx,
		}));

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
	const $todoArea = createRef();
	const $processArea = createRef();
	const $closeoArea = createRef();
	const $todoItem = (todoItem,idx) => {
		const $element = createRef();
		$elements = [...$elements,{
			idx:todoItem.idx,
			$element:$element
		}];

		return (
			<div className="item" ref={$element} key={idx} onMouseDown={(e)=>todoItemMouseDownHandle(e,todoItem,$element.current)}>
				{todoItem.title}
			</div>
		);
	};
	return (
		<section>
			<div className="drag-container">
				<div className="area" data-type="todo" ref={$todoArea}>
					{ categorys.todo.map($todoItem) }
				</div>				
				<div className="area" data-type="process" ref={$processArea}>
					{ categorys.process.map($todoItem) }
				</div>				
				<div className="area" data-type="close" ref={$closeoArea}>
					{ categorys.close.map($todoItem) }
				</div>				
			</div>
		</section>
	);
}