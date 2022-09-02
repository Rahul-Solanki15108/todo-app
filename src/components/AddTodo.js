import { Paper } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from './FormComponents/textField'
import { renderRadioField } from './FormComponents/radioField'
import { renderCheckboxField } from './FormComponents/selectField';
import { renderSliderAgeField } from './FormComponents/sliderField';
import { renderDateField } from './FormComponents/dateField';
import validate from './FormComponents/validate';
import { renderStatusField } from './FormComponents/statusField';
import { useDispatch } from 'react-redux';
import { addTask, EditTask } from '../store/actions/TodoActions';

function AddTodo(props) {
    const { handleSubmit } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const checkBoxValues = [
        {
            id: '1',
            name: 'Sports'
        },
        {
            id: '2',
            name: 'Reading'
        },
        {
            id: '3',
            name: 'Music'
        }
    ];

    const submitTodo = (values) => {
        console.log(values)
        if(params.todoId){
            dispatch(EditTask(values,params.todoId));
            navigate('/');
        }else{
            dispatch(addTask(values));
            navigate('/');
        }
    }

return (
    <Paper elevation={3} sx={{ p: 1, m: 2 }}>
        <br />
        <form onSubmit={handleSubmit(submitTodo)} noValidate>
            <Field label="User Name" name="userName" component={renderTextField} />
            <br />

            <Field label="Gender" name="gender" component={renderRadioField} placeholder="Select your Gender" />
            <br />

            <Field label="Hobbies" name="hobbies" component={renderCheckboxField} placeholder="Select your Hobbies" checkBoxValues={checkBoxValues} />
            <br />

            <Field name="age" label="Age" component={renderSliderAgeField} />
            <br />

            <Field labele="date" name="date" component={renderDateField} />
            <br /><br />
            <Field label="Task Name" name="taskName" component={renderTextField} />
            <br /><br />

            <Field label="Status" name="status" component={renderStatusField} />
            <br /><br />

            <Button type="submit" style={{ marginTop: 10, marginRight: 10 }} variant="contained" color="success" > 
                    { params.todoId ? 'Edit Task' : 'ADD Task'}
            </Button >

            <Link to="/" style={{ textDecoration: 'none' }} >
                <Button style={{ marginTop: 10 }} variant="contained" color="error">Cancle</Button>
            </Link >
            
        </form >

    </Paper >
)
}

export default reduxForm({
    form: 'todoForm', // a unique identifier for this form
    enableReinitialize: true,
    validate,
})(AddTodo);
