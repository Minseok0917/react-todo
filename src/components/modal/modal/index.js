import './index.css';

export default function({active,closeHandle,child={}}){
	return (
		<div className="modal">
			<div className="modal-container">
				{[child.header].map( (Child,idx) => <Child key={idx} /> )}
				{[child.section].map( (Child,idx) => <Child key={idx} /> )}
				{[child.footer].map( (Child,idx) => <Child key={idx} /> )}
			</div>			
		</div>
	);
}