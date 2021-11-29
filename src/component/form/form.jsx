import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormToFill = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: {inputText}, completed: false, id: uuidv4() }
        ]);
        setInputText("");
        
    }

    const statusHandler =(e) => {
        setStatus(e.target.value);
    }
    
        return (
            <form>
                <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filterTodo">
                        <option value="none">None</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>

            </form>
        )
    }


export default FormToFill;