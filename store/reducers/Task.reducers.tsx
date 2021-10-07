import{ADD_ITEM,} from "../actions/Task.action"


const initialState = {
    tasks: [],
}

const TaskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                tasks: state.tasks.concat(action.tasks)
            }
        default: 
        return state
    }
}

export default TaskReducer;