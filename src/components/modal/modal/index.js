import { createRef } from 'react';
import './index.css';

export default function({active,closeHandle,child={},close}){
	const $modal = createRef();
	const selfClose= function(e){
		if ( $modal.current === e.target  ) close();
	}
	return (
		<div className="modal"  ref={$modal} onClick={selfClose}>
			<div className="modal-container">
				{[child.header].map( (Child,idx) => <Child key={idx} /> )}
				{[child.section].map( (Child,idx) => <Child key={idx} /> )}
				{[child.footer].map( (Child,idx) => <Child key={idx} /> )}
			</div>			
		</div>
	);
}