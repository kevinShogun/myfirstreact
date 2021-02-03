import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/forms";
import TodoList from "./components/TodoList";

const App = () => {
	const [inputText, setInputText] = useState("");
	const [Items, setItems] = useState([]);
	const [status, setStatus] = useState("all");
	const [filterTodos, setFilterTodos] = useState([]);

	useEffect(() => {
		getLocalTodos();
	},[]);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [Items, status]);

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilterTodos(Items.filter((item) => item.completed === true));
				break;

			case "uncompleted":
				setFilterTodos(Items.filter((item) => item.completed === false));
				break;

			default:
				setFilterTodos(Items);
				break;
		}
	};

	const saveLocalTodos = () => {
		
			localStorage.setItem('Items', JSON.stringify(Items));
		
	};

	const getLocalTodos = () => {
		if(localStorage.getItem('Items')===null){
			localStorage.setItem('Items', JSON.stringify);
		}else{
			let todoLocal = JSON.parse(localStorage.getItem('Items'));
			setItems(todoLocal);
		}
	};

	return (
		<>
			<div className="container">
				<div className="App">
					<header>
						<i class="fas fa-clipboard-list"></i> <h1>To Do List</h1>
					</header>
					<Form
						inputText={inputText}
						Items={Items}
						setItems={setItems}
						setStatus={setStatus}
						setInputText={setInputText}
					/>
					<TodoList
						filterTodos={filterTodos}
						Items={Items}
						setItems={setItems}
					/>
				</div>
			</div>
		</>
	);
};

export default App;
