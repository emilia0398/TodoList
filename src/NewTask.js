import React from "react"
import './App.css'

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const val = this.state.value;
        if (val !== "") {
            this.props.handleSubmit(val);
        }
        this.setState({
            value: ""
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="addTask"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input
                    type='submit'
                    value='Submit'
                />
            </form>
        )
    }
}

export default NewTask;