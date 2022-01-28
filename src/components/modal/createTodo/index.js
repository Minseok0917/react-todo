import { createRef , useState } from 'react';
import Modal from '../modal';
import Markdown from '../../../plugin/markdown';
import './index.css';




export default function(){
	const defaultData = `# 안녕하세요\n# FE 개발자 정민석입니다.`;
	const $title = createRef();
	const $textarea = createRef();

	const [html,setHTML] = useState('');
	const result = function(){
		setHTML(Markdown($textarea.current.value))
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
				 	<div dangerouslySetInnerHTML={{ __html:html }} />
				</div>
			);
		},
		footer:function(){
			return(
				<div className="modal-footer">
					<div className="btn-container">
						<button className="btn purple" onClick={result} >완료</button>
						<button className="btn">취소</button>
					</div>
				</div>
			);
		}
	}

	return (
		<Modal child={child} />
	)
}