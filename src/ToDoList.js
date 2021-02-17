import React from "react"
import './App.css'
import Task from './Task'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeCompleted = (id) => {
        this.props.handleChangeCompleted(id);
    }
    render() {
        if (Object.keys(this.props.toDoList).length > 0) {
            var todoItems = [];
            if (this.props.hideCompleted) {
                var filteredList = []
                for (var i = 0; i < Object.keys(this.props.toDoList).length; i++) {
                    if (!this.props.toDoList[i].completed) {
                        filteredList = [...filteredList, this.props.toDoList[i]];
                    }
                }
                if (Object.keys(filteredList).length < 1) {
                    return (
                        <p>Nothing to do...</p>
                    )
                }
                todoItems = filteredList.map(item => <Task key={item.index} item={item} handleChange={this.handleChangeCompleted} />)
            }
            else {
                todoItems = this.props.toDoList.map(item => <Task key={item.index} item={item} handleChange={this.handleChangeCompleted} />)
            }
            return (
                <div className="todos">
                    {todoItems}
                </div>
            )
        }
        else {
            return (
                <p>Nothing to do...</p>
            )
        }
    }
}

export default ToDoList;