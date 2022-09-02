const intialState = {
    IS: [],
    editTodo: {}
}

const TaskReducer = (state = intialState, action) => {

    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, IS: [...state.IS, action.payload] };

        case 'EDIT_TASk':
            return { ...state, IS: state.IS.map((val, index) => index == action.payload.id ? action.payload.data : val) };

        case 'DELETE_TASK':
            state = {
                ...state,
                IS: state.IS.filter((item, index) => index !== action.payload ? item : null)
            }
            return state;

        case 'GET_TODO':
            state.editTodo = state?.IS.find((val, index) => index == action.payload);
            return state;

        default: return state;
    }
}

export default TaskReducer;