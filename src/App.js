import React from "react"
import './App.css'
import Filter from './Filter'
import ToDoList from './ToDoList'
import NewTask from './NewTask'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hideCompleted: false,
      toDoList: [],
      previousIndex: 0
    };
  }

  changeCompleted = () => {
    this.setState((prevState) => ({
      hideCompleted: !prevState.hideCompleted
    }));
  }

  handleSubmit = (value) => {
    var index = this.state.previousIndex + 1;
    var task = {
      index: index,
      value: value,
      completed: false
    }
    var updatedList = [...this.state.toDoList, task];
    this.setState({
      toDoList: updatedList,
      previousIndex: index
    });
  }

  handleChangeCompleted = (index) => {
    var previousList = [...this.state.toDoList];
    for (var i = 0; i < Object.keys(previousList).length; i++) {
      if (previousList[i].index === index) {
        previousList[i].completed = !previousList[i].completed;
      }
    }
    this.setState({
      toDoList: previousList
    });

  }

  render() {
    return (
      <div className='App'>
        <p className='appHeader'>Welcome to my To Do list!</p>
        <div className="todo-list">
          <Filter
            hideCompleted={this.state.hideCompleted}
            handleChangeCompleted={this.changeCompleted}
          />
          <div className='listContainer'>
            <ToDoList
              toDoList={this.state.toDoList}
              hideCompleted={this.state.hideCompleted}
              handleChangeCompleted={this.handleChangeCompleted}
            />
          </div>
          <NewTask
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default App;