import { FILTER_DATA } from "../constants/actionTypes";

export const filterData = (payload) => {
    return { type: FILTER_DATA, payload}
}