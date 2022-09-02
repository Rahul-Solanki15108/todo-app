import { TextField } from '@mui/material';


export const renderDateField = ({ label,
    input,
    meta: { touched, error },
    ...custom }) => {
    return (
        <>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                ForwardRef
                    label="Enter Date"
                    {...input}
                    renderInput={(params) => <TextField {...params}/>}
                /> ERRORRR  
            </LocalizationProvider> */}
            <TextField
                id="date"
                label={label}
                placeholder={label}
                {...input}
                {...custom}
                type="date"
                sx={{ width: 230 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {touched &&
                (error &&
                    <span className="vErrorText">{label}{error}</span>
                )}
        </>
    )
}
