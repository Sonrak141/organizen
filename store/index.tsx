import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/Auth.reducers"

import TaskReducer from "./reducers/Task.reducers";

const RootReducer = combineReducers({
    tasks: TaskReducer,
    auth: AuthReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof RootReducer>