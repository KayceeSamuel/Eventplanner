import React, { useState, useEffect } from 'react';
import Tasklist from '../tasklist/tasklist';
import FormToFill from '../form/form';
import Typography from '@mui/material/Typography'
import { CssBaseline } from '@mui/material'


function Mainview() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //use effect for getLocalTodos
    useEffect(() => {
        getLocalTodos();
    }, []);

    //Use effect function
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    // Save to local
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"))
            setTodos(todoLocal);
        }
    };

    return (
        <div>
            <CssBaseline />
            <div>
                <Typography variant="h1" align="center" color="textPrimary">Tasks</Typography>
            </div>

            <div>
                <FormToFill
                    inputText={inputText}
                    todos={todos}
                    setTodos={setTodos}
                    setInputText={setInputText}
                    setStatus={setStatus}

                />
            </div>

            <div>
                <Tasklist
                    todos={todos}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                />
            </div>
        </div>
    )
};


export default Mainview;
