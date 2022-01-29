import { useState } from 'react';
import ModalCreateTodo from '../modal/createTodo';
import ModalDetailTodo from '../modal/detailTodo';
import './index.css';
import {
	getStorage,
	setStorage
} from './utils';

let selectTodo;


export default function({date}){
	const loadTodo = getStorage(date);
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
	const modalClose = function(){
		modalController('createTodo',false);
	};

	const addTodo = function(todoValue){
		setTodoState([...todoState,todoValue]);
		setStorage(date,[...todoState,todoValue]);
	};



	return (
		<div className="todo-app">
			<div className="title-container">
				<h2 className="title">{date}</h2>
				<button className="btn" onClick={ () => modalController('createTodo',true) }>일단 추가</button>
			</div>
			<div className="todo-container">
				<div className="todo-area todo-block">
					<h3 className="title">할 일</h3>
					<div className='item-container'>
						{ todoState.map( ({title,description},idx) => (
							<div className="item" key={idx} onClick={ ()=> {
								modalController('detailTodo',true);
								selectTodo = {title,description}
							} }>
								{title}
							</div>
						))}
					</div>
				</div>
				<div className="todo-area processing-block">
					<h3 className="title">진행중</h3>
				</div>
				<div className="todo-area close-block">
					<h3 className="title">완료</h3>
				</div>
			</div>
			{  modalState.createTodo && <ModalCreateTodo addTodo={addTodo} close={modalClose} /> }
			{  modalState.detailTodo && <ModalDetailTodo todoItem={selectTodo} close={modalClose} /> }
		</div>
	);
}