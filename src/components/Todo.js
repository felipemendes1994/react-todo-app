import React from 'react';

import {AddNewTask} from './AddTask';
import {ToDoAppList} from './TaskList';

export class ToDo extends React.Component{
    constructor(props){
        super();
        this.state = {
            tasks: props.tasks
        }

        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text){
        var updatedTask = this.state.tasks;
        updatedTask.unshift(text);
        this.setState({tasks: updatedTask});
        this.updateLocalStorage(updatedTask);
    }

    removeTask(text){
        var updatedTask = this.state.tasks;
        updatedTask.splice(updatedTask.indexOf(text), 1);
        this.setState({tasks: updatedTask});
        this.updateLocalStorage(updatedTask);
    }
    
    updateLocalStorage(updatedTask){
        console.log('Tasks Saved');
        localStorage.setItem('storedTasks', JSON.stringify(updatedTask));
    }

    render(){
        return(
            <div>
                <h1>ToDo APP</h1>

                <AddNewTask updateList={this.updateList} />
                <ToDoAppList tasks={this.state.tasks} removeItem={this.removeTask}/> 
            </div>
        );
    }
}