import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export const renderStatusField = ({
    label,
    input,
    meta: { error, touched },
    ...custom
}) => (
    <>
        <FormControl sx={{ minWidth: 100 }}>
            <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                {...input} //it gives all methods of input and value
                {...custom}
            >
                {/* <MenuItem value="">None</MenuItem> */}
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="In-Active">In-Active</MenuItem>
            </Select>
        </FormControl><br />
        {touched &&
            (error &&
                <span className="vErrorText">{label}{error}</span>
            )}
    </>
);