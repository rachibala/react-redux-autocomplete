import { FILTER_DATA } from "../constants/actionTypes";
import { data_list } from "../constants/data";

const initialState = {
    data_list: data_list,
    display_list: []
};

const rootReducer = (state = initialState, action) => {

    if (action.type === FILTER_DATA) {
        const display_list = (action.payload) ? (
            state.data_list.filter((data) => {
                return data.toLowerCase().includes(action.payload.toLowerCase());
            })
        ) : [];
        return {
            ...state,
            display_list: display_list
        }
    }

    return state;
};

export default rootReducer;