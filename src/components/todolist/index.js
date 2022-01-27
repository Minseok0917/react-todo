import './index.css';


export default function({date}){
	return (
		<div className="todo-app">
			<div className="title-container">
				<h2 className="title">{date}</h2>
				<button className="btn">일단 추가</button>
			</div>
			<div className="todo-container">
				<div className="todo-area todo-block">
					<h3 className="title">할 일</h3>
					<div className='item-container'>
						<div className="item"><p>1TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>2TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>3TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>4TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>5TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>6TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>7TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>8TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>9TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>10TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>11TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>12TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>13TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>14TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>15TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>16TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>17TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>18TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>19TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>20TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>21TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>22TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>23TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>24TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>25TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>26TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>27TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>28TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>29TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>30TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>31TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>32TodoList Todo 추가 기능구현</p></div>
						<div className="item"><p>33TodoList Todo 추가 기능구현</p></div>
					</div>
				</div>
				<div className="todo-area processing-block">
					<h3 className="title">진행중</h3>
				</div>
				<div className="todo-area close-block">
					<h3 className="title">완료</h3>
				</div>
			</div>
		</div>
	);
}