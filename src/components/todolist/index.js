import { useState, useEffect } from 'react';
import ModalCreateTodo from '../modal/createTodo';
import ModalDetailTodo from '../modal/detailTodo';
import './index.css';
import {
	getStorage,
	setStorage
} from './utils';

let selectTodo = {};
let focusTodo = {};
let selectStatus = '';
let isDown = false;
let isDrag = false;
let downPos = {};
let movePos = {};


export default function({date}){
	const loadTodo = getStorage(date).sort((a,b) => a.idx - b.idx);
	const [modalState,setModalState] = useState({
		createTodo:false,
		detailTodo:false,
	});
	const [todoState,setTodoState] = useState(loadTodo);
	const modalController = function(key,status){
		setModalState({
			[key]:status
		});
	};

	const globalMouseMove = function(e){
		if( !isDown ) return;
		isDrag = true;
		movePos.x = e.pageX;
		movePos.y = e.pageY;
	};
	const globalMouseUp = function(){
		if( !isDrag || !isDown || Object.keys(modalState).some( isModal => isModal ) ) return;

		if( selectStatus.length ){
			selectTodo.status = selectStatus;
		}

		selectTodo = {};
		focusTodo = {};
		selectStatus = '';
		isDown = false;
		isDrag = false;
		downPos = {};
		movePos = {};

		setTodoState([...todoState]);
		setStorage(date,[...todoState]);
	}
	useEffect(()=>{ // mount 
		document.addEventListener('mousemove',globalMouseMove);
		document.addEventListener('mouseup',globalMouseUp);

		return(()=>{  // unmount 
			document.removeEventListener('mousemove',globalMouseMove);
			document.removeEventListener('mouseup',globalMouseUp);
		});
	});

	const modalClose = function(key){
		modalController(key,false);
	};

	const getIdx = (() => {
		let count = (todoState.slice(-1)[0]?.idx ?? -1)+1;
		return () => count++;
	})();

	const addTodo = function(todoValue){
		todoValue.idx = getIdx();
		todoValue.pIdx = todoValue.idx;
		todoValue.status = 'todo';
		setTodoState([...todoState,todoValue]);
		setStorage(date,[...todoState,todoValue]);
	};
	const mousedownHandle = function(e,todoItem){
		selectTodo = todoItem;
		downPos.x = e.pageX;
		downPos.y = e.pageY;
		isDown = true;
	};


	const mouseEnterHandle = function(e,todoItem){
		focusTodo = todoItem;
	}
	const mouseleaveHandle = function(e){
		focusTodo = {};
	}

	const statusMouseEnterHandle = function(statusName){
		selectStatus = statusName;
	};
	const statusMouseLeaveHandle = function(){
		selectStatus = '';
	};



	return (
		<div className="todo-app">
			<div className="title-container">
				<h2 className="title">{date}</h2>
				<button className="btn" onClick={ () => modalController('createTodo',true) }>일단 추가</button>
			</div>
			<div className="todo-container">
				<div className="todo-area todo-block" 
					onMouseEnter={()=> statusMouseEnterHandle('todo') }
					onMouseLeave={()=> statusMouseLeaveHandle() }>
					<h3 className="title">할 일</h3>
					<div className='item-container'>
						{ todoState.filter( ({status}) => status === 'todo' ).map( (todoItem,idx) => (
							<div className="item" key={idx} 
							onMouseDown={(e)=>mousedownHandle(e,todoItem)} 
							onMouseEnter={(e)=>mouseEnterHandle(e,todoItem)} 
							onMouseLeave={(e)=>mouseleaveHandle(e)} 
							onDoubleClick={ ()=> {
								modalController('detailTodo',true);
								selectTodo = todoItem;
							} }>
								{todoItem.title}
							</div>
						))}
					</div>
				</div>
				<div className="todo-area processing-block" 
					onMouseEnter={()=> statusMouseEnterHandle('process') }
					onMouseLeave={()=> statusMouseLeaveHandle() }>
					<h3 className="title">진행중</h3>
					<div className='item-container'>
						{ todoState.filter( ({status}) => status === 'process' ).map( (todoItem,idx) => (
							<div className="item" key={idx} 
							onMouseDown={(e)=>mousedownHandle(e,todoItem)} 
							onMouseEnter={(e)=>mouseEnterHandle(e,todoItem)} 
							onMouseLeave={(e)=>mouseleaveHandle(e)} 
							onDoubleClick={ ()=> {
								modalController('detailTodo',true);
								selectTodo = todoItem;
							} }>
								{todoItem.title}
							</div>
						))}
					</div>
				</div>
				<div className="todo-area close-block" 
					onMouseEnter={()=> statusMouseEnterHandle('close') }
					onMouseLeave={()=> statusMouseLeaveHandle() }>
					<h3 className="title">완료</h3>
					<div className='item-container'>
						{ todoState.filter( ({status}) => status === 'close' ).map( (todoItem,idx) => (
							<div className="item" key={idx} 
							onMouseDown={(e)=>mousedownHandle(e,todoItem)} 
							onMouseEnter={(e)=>mouseEnterHandle(e,todoItem)} 
							onMouseLeave={(e)=>mouseleaveHandle(e)} 
							onDoubleClick={ ()=> {
								modalController('detailTodo',true);
								selectTodo = todoItem;
							} }>
								{todoItem.title}
							</div>
						))}
					</div>
				</div>
			</div>
			{  modalState.createTodo && <ModalCreateTodo addTodo={addTodo} close={ ()=> modalClose('createTodo')} /> }
			{  modalState.detailTodo && <ModalDetailTodo todoItem={selectTodo} close={ ()=> modalClose('detailTodo')} /> }
		</div>
	);
}