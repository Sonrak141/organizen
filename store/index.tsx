import { createStore, combineReducers } from "redux";

import TaskReducer from "./reducers/Task.reducers";

const RootReducer = combineReducers({
    tasks: TaskReducer
})

export default createStore(RootReducer);
export type RootState = ReturnType<typeof RootReducer>