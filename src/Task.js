import React from "react"
import './App.css'

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (id) => {
        this.props.handleChange(id);
    }
    render() {
        return (
            <div>
                <label style={this.props.item.completed ? { fontStyle: "italic", color: "#cdcdcd", textDecoration: "line-through" } : null}>
                    <input
                        type="checkbox"
                        checked={this.props.item.completed}
                        onChange={() => this.handleChange(this.props.item.index)}
                    />
                    {this.props.item.value}
                </label>
            </div>
        );
    }
}

export default Task;