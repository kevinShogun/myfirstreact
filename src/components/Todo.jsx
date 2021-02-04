import React from "react";

const Todo = ({ text, Item, Items, setItems }) => {
	const deleteHandler = () => {
		setItems(Items.filter((el) => el.id !== Item.id));
	};

	const completeHandler = () => {
		setItems( Items.map((todo) => {
				if (todo.id === Item.id) {
					return {
						...todo, completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};

	return (
		<>
			<div className="todo">
				<li className={`todo-item ${Item.completed ? "completed" : ""}`}>
					{text}
				</li>
				<button onClick={completeHandler} className="complete-btn">
					<i class="far fa-check-circle"></i>
				</button>
				<button onClick={deleteHandler} className="trash-btn">
					<i class="far fa-trash-alt"></i>
				</button>
			</div>
		</>
	);
};

export default Todo;
