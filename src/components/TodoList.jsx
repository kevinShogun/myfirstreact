import React from "react";
import Todo from "./Todo";

const TodoList = ({ Items, setItems,filterTodos }) => {
	return (
		<>
			<div class="todo-container">
				<ul class="todo-list">
					{filterTodos.map((Item) => (
						<Todo
							Items={Items}
							setItems={setItems}
							text={Item.text}
							key={Item.id}
                            Item={Item}
						/>
					))}
				</ul>
			</div>
		</>
	);
};

export default TodoList;
