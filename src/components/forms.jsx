import React from "react";

const Form = ({setInputText,inputText, Items, setItems}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        setItems([
            ...Items, {text: inputText, complete: false, id: Math.random() * 1000}
        ])

    }

	return (
		<>
			<form>
      <input value={inputText}
      onChange={inputTextHandler} type="text" class="todo-input" />
      <button onClick={submitHandler} class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
		</>
	);
};

export default Form;
