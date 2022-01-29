import { createRef , useState } from 'react';
import Modal from '../modal';
import Markdown from '../../../plugin/markdown';
import './index.css';




export default function({todoItem,close}){
	const child = {
		header:function(){
			return (
				<div className="modal-header">
					<h2 className="title">{todoItem.title}</h2>
					<button onClick={close}>X</button>
				</div>
			);
		},
		section:function(){
			return(
				<div className="modal-section">
					<div className="markdown" dangerouslySetInnerHTML={{ __html: Markdown(todoItem.description) }}></div>
				</div>
			);
		},
		footer:function(){
			return(
				<div className="modal-footer">

				</div>
			);
		}
	}

	return (
		<Modal child={child} close={close} />
	)
}