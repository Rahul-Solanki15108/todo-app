import React from 'react';
import TextField from '@mui/material/TextField';
import '../../index.css';
export const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error, warning },
    ...custom
}) => (
    <>
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        id="outlined-basic"
        variant="outlined"
        size="small"
        style={{ width: '80%' }}
        {...input}  
        {...custom}
    /><br/>
     {touched && 
      (error && 
        <span className="vErrorText">{label}{error}</span>
    )}
    </>
);

