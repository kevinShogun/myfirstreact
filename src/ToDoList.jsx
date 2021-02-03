import React from "react";


const ToDoList = (props) => {
	const checkItmes = (id) => {
		console.log("chcek");

		const styles = {
			color: 'black',
		};

		<li style={styles}> {props.text} </li>;
	};

	return (
		<>
			<div className="todo_style">
				<i
					className="fa fa-times"
					aria-hidden="true"
					onClick={() => {
						props.onSelect(props.id);
					}}
				/>
				<li
					onClick={() => {
						checkItmes(props.id);
					}}
				>
					{props.text}
				</li>
			</div>
		</>
	);
};

export default ToDoList;
