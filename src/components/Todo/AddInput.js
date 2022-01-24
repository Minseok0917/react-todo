export default function(props){
	const { addTodo } = props;

	const replaceTodoName = (todoName) => 
		todoName.replace(/[^가-핳\_\-a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ]/g,'').slice(0,12);


	const inputHandle = function({target}){
		const { value } = target;
		target.value = replaceTodoName(value);
	}

	const keydownHandle = function({target,key}){
		const {value} = target;
		const addKeys = ['Enter',' ','Tab'];
		const isAdd = addKeys.includes(key);
		if( isAdd && addTodo({
			name:value
		})){
			target.value = '';
		}
	}

	return (
		<input type="text" 
			className="todo-input" 
			onInput={inputHandle}
			onKeyDown={keydownHandle}
		/>
	);
}