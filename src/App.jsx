import React , { useState } from "react";
import "./App.css";
import Form from "./components/forms";
import TodoList from "./components/TodoList";

/* import ToDoList from "./ToDoList"; */

const App = () => {
	
	const [inputText, setInputText] = useState("");
	 const [Items, setItems] = useState([]);

	/*const itemEvent = (event) => {
		setInputList(event.target.value);
	}; 
	const deleteItems = (id) => {
        console.log("DElete");
        setItems((olditems) => {
			return olditems.filter((arrElem, index)=>{
                return index !== id;
            })
		});
	};
	 */

	return (
		<>
			
				<div className="App">
					<header>
					<i class="fas fa-clipboard-list"></i>  <h1>To Do List</h1>
					</header>
					<Form inputText={inputText} Items={Items} setItems={setItems} setInputText={setInputText}/>
					<TodoList Items={Items} setItems={setItems}/>
				</div>
				
				
		</>
	);
};

export default App;
