import { createRef , useState } from 'react';
import Modal from '../modal';
import './index.css';




export default function({close,addTodo}){
	const defaultData = `# 안녕하세요\n# FE 개발자 정민석입니다.`;
	const $title = createRef();
	const $textarea = createRef();

	const result = function(){
		addTodo({
			title:$title.current.value,
			description:$textarea.current.value
		});
		alert('정상 추가 되었습니다!');
		close();
	}


	const child = {
		header:function(){
			return (
				<div className="modal-header">
					<h2 className="title">TODO 작성</h2>
				</div>
			);
		},
		section:function(){
			return(
				<div className="modal-section">
					<div className="input-block">
						<label className="label" htmlFor="title">제목</label>
						<input className="input" id="title" type="text" ref={$title} />
					</div>
					<div className="input-block">
						<label className="label" htmlFor="content">내용</label>
						<textarea className="textarea" id="content" ref={$textarea}></textarea>
					</div>
				</div>
			);
		},
		footer:function(){
			return(
				<div className="modal-footer">
					<div className="btn-container">
						<button className="btn purple" onClick={result} >완료</button>
						<button className="btn" onClick={ close }>취소</button>
					</div>
				</div>
			);
		}
	}

	return (
		<Modal child={child} close={close} />
	)
}