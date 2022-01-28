import Modal from '../modal';
import './index.css';

export default function(){
	const defaultData = `# 안녕하세요\n# FE 개발자 정민석입니다.
	`;


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
						<label className="label" for="title">제목</label>
						<input className="input" id="title" type="text" />
					</div>
					<div className="input-block">
						<label className="label" for="content">내용</label>
						<textarea className="textarea" id="content" value={defaultData}></textarea>
					</div>
				</div>
			);
		},
		footer:function(){
			return(
				<div className="modal-footer">
					<div className="btn-container">
						<button className="btn purple">완료</button>
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