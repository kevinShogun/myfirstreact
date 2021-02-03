import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
	const [inputList, setInputList] = useState("");
	const [Items, setItems] = useState([]);

	const itemEvent = (event) => {
		setInputList(event.target.value);
	};

	const listOfItems = () => {
		setItems((olditems) => {
			return [...olditems, inputList];
		});
		setInputList("");
    };
    
    const deleteItems = (id) => {
        console.log("DElete");
        setItems((olditems) => {
			return olditems.filter((arrElem, index)=>{
                return index !== id;
            })
		});
	};
	
	

	return (
		<>
			<div className="Maindiv">
				<div className="App">
					<div className="line">
						<h1>To Do List</h1>
					</div>
				</div>

				<div className="form">
					<input
						type="text"
						name="title"
						placeholder="Agregar tarea.."
						value={inputList}
						onChange={itemEvent}
					/>
					<button onClick={listOfItems}>+</button>
				</div>
				<div className="list">
					<ol>
						{/* <li>{inputList}</li> */}

						{Items.map((itemval, index) => {
							return <ToDoList
                            key={index}
                            id={index}
                             text={itemval} 
                                 onSelect={deleteItems}
                             />;
						})}
					</ol>
				</div>
			</div>
		</>
	);
};

export default App;
