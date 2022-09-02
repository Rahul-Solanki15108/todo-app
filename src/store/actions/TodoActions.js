
export const addTask = (data) => {
    return {
        type : 'ADD_TASK',
        payload : data
    }
}

export const EditTask = (data,id) => {
    return{
        type :'EDIT_TASk',
        payload : {data,id}
    }
}

export const deleteTask = (index) => {
    return {
        type : 'DELETE_TASK',
        payload : index
    }
}

export const getToDo = (Id) =>{
    return { type :"GET_TODO", payload: Id }
}



