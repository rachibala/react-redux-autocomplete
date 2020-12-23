import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return { display_list:  state.display_list}
}

const ConnectedList = ({display_list}) => {
    return (
        <ul className="data-list">
            {
                display_list.map((data, i) => <li key={i}> {data} </li>)
            }
        </ul>
    )
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;