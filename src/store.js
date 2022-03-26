import { createStore } from "redux";
import listReducer from "./actionReducer/reducers";

const initialState = {
	lists: [],
};

const store = createStore(listReducer, initialState);

export default store;
