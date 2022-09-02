import { TextField } from '@mui/material';


export const renderDateField = ({ label,
    input,
    meta: { touched, error },
    ...custom }) => {
    return (
        <>
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
