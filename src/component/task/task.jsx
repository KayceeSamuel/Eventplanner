import React from 'react';
import Card from '@mui/material/Card';
import { IconButton } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { DeleteOutlined } from '@material-ui/icons';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';






const TodoCard = ({ text, todos, todo, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        //console.log(todo);
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <Card className={`todo-item ${todo.completed ? "completed" : ""}`} elevation={3} padding={3}>
                <CardContent>
                    <Typography variant="h4">
                        {text.inputText}
                    </Typography>
                    <IconButton className="todoIcon" onClick={completeHandler}>
                        <AssignmentTurnedInIcon />
                    </IconButton>

                    <IconButton fontSize="large"  onClick={deleteHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </CardContent>


            </Card>
        </div>
    )
}

export default TodoCard;
