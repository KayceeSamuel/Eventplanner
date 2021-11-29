import React from 'react';


class Action extends Component {
    componentDidMount() {
        this.getTasks();
    }

    //Get all tasks
    getTasks() {
        app.get('/taskItems', (req, res) => {
            res.json(taskItems);
        });
    }

    // create new task
    createTasks(action) {
        app.post('/taskItems', (req, res) => {
            let newTask = req.body;
            if (!newTask.title) {
                const messageTitle = 'Missing Title of task';
                res.status(400).send(messageTitle);
            };
            if (!newTask.time) {
                const messageTime = "TIme for task is not stated";
                res.status(400).send(messageTime)
            } else {
                newTask.id = uuid.v4();
                taskItems.push(newTask);
                res.status(201).send(newTask);
            }
        })
    }

    //Delete a task
    deleteTasks() {
        app.delete('/taskItems/:id', (req, res) => {
            let taskDelete = taskItems.find((taskDelete) => {
                return taskDelete.id === req.params.id
            });
            if (taskDelete) {
                taskItems = taskItems.filter((obj) => {
                    return obj.id !== req.params.id
                });
                res.status(201).send('Task' + req.params.id + ' was deleted.');
            }
        });
    }

    //update time of task
    updateTime() {
        app.put('/taskItems/:time', (req, res) => {
            let taskItem = taskItems.find((taskItem) => {
                return taskItem.name === req.params.name
            });
            if (taskItem) {
                taskItem.times[req.params.time] = parseInt(req.params.time);
            }
        })
    }
}

// card action
    return(
        <div className="todo">
        <Card>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text.inputText}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </Card>

        <div className="todo">
            <Card elevation = {3} padding={3}>
                <CardContent>
                    <Typography variant="h4">
                        {text.inputText}
                    </Typography>
                    <button onClick={completeHandler} className="complete-btn">
                        <i className="fas fa-check"></i>
                    </button>
                    <button onClick={deleteHandler} className="trash-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </CardContent>
            </Card>
        </div>
    </div>
)
    
