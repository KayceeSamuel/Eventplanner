import React from 'react';
import TaskCard from '../task/task';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const TaskList = ({ todos, setTodos, filteredTodos }) => {

    return (
        <Container >
            <Grid container>
            <Grid item xs={8}>    
                    {filteredTodos.map((todo) => (
                        <TaskCard todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text} />
                    ))}     
                </Grid>
            </Grid>
        </Container>
    )
}
export default TaskList;