import React from "react"
import './App.css'

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        name="hideCompleted"
                        type="checkbox"
                        checked={this.props.hideCompleted}
                        onChange={this.props.handleChangeCompleted} />
                    hide completed
        </label>
            </div>
        )
    }
}

export default Filter;