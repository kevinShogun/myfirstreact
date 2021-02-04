import React from "react";
import Todo from "./Todo";

const TodoList = ({ Items, setItems }) => {
	return (
		<>
			<div class="todo-container">
				<ul class="todo-list">
					{Items.map((Item) => (
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
