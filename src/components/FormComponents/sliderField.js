import { FormLabel } from "@mui/material";
import Slider from '@mui/material/Slider';

export const renderSliderAgeField = ({
    label,
    input,
    meta : { touched, error },
    ...custom
}) => {
    return (
        <>  
            <FormLabel>
                {label} :  {input.value}
                {touched &&
                    (error &&
                        <span className="vErrorText"> {label}{error}</span>
                    )}
            </FormLabel>
            <br />
            <Slider
                label={label}
                aria-labelledby="input-slider"
                aria-label="Default"
                min={18}
                max={55}
                step={1}
                style={{ width: '40%' }}
                valueLabelDisplay="auto"
                {...input}
                {...custom}
            />
        </>
    );
}