import React from 'react';

const validate = (values) => {
    let errors = {}
    if (!values.userName) {
        errors.userName = ' Required '
    }else if(values?.userName?.length > 15){
        errors.userName = ' Must be 15 characters or less'
    }else if(!/^[a-zA-Z\s]*$/.test(values?.userName)){
        errors.userName = ' Please Enter Only letters and spaces'
    }

    if(!values.gender){
        errors.gender = ' Required '
    }
    if(!values.hobbies){
        errors.hobbies = ' Required'
    }
    if(!values.age){
        errors.age = ' Required'
    }
    if(!values.date){
        errors.date = ' Required'
    }
    if(!values.taskName){
        errors.taskName = ' Required'
    }
    if(!values.status){
        errors.status = ' Required'
    }
    return errors;
}

export default validate;