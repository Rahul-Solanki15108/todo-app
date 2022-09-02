import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getToDo } from '../store/actions/TodoActions';
import AddTodo from './AddTodo';


function ManageTodo() {
    let { todoId } = useParams();
    const dispatch = useDispatch();
    const TaskReducer = useSelector(state => state.TaskReducer?.editTodo);
    useEffect(() => {
        dispatch(getToDo(todoId))
        
    }, [todoId])
    return (
        <div>
            <AddTodo initialValues={TaskReducer}/>
        </div>
    )
}

export default ManageTodo