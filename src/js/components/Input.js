import React, { Component } from "react";
import { connect } from "react-redux";
import { filterData } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        filterData: (search_str) => dispatch(filterData(search_str))
    }
}

class ConnectedInput extends Component {
    constructor(props) {
        super(props);
        this.input_ref = React.createRef();
        this.initial_state = {
            search_str: ''
        }
        this.state = this.initial_state
    }

    handleChange = (value) => {
        this.setState({
            search_str: value
        }, () => {
            this.props.filterData(this.state.search_str);
        })
    }

    onClear = () => {
        this.input_ref.current.value = "";
        this.handleChange(this.initial_state.search_str);
    }

    render() {
        return (
            <div className="search-box">
                <input
                    className="search-input"
                    ref={this.input_ref}
                    type="text"
                    onChange={(event) => this.handleChange(event.target.value)}
                />
                <button
                    className="search-clear"
                    onClick={this.onClear}
                >
                    X
                </button>
            </div>
        );
    }
}

const Input = connect(null, mapDispatchToProps)(ConnectedInput);

export default Input;