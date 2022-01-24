export default function(props){
	const { addTodo } = props;

	const replaceTodoName = (todoName) => todoName.replace(/[^가-핳\_\-a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ]/g,'');

	const inputHandle = function({target}){
		const { value } = target;
		target.value = replaceTodoName(value);
	}

	const keydownHandle = function(event){
		console.log(event);
		// const addKeys = ['Enter','Space','Tab'];
		// const isAdd = addKeys.inludes(key);
		// if( isAdd ){
			// console.log('추가');
		// }
	}

	return (
		<input type="text" 
			className="todo-input" 
			onInput={inputHandle}
			onKeyDown={keydownHandle}
		/>
	);
}