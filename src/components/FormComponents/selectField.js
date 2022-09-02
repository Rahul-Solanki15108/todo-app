import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material';

export const renderCheckboxField = (props) => {
    const RenderCheckBoxes = (props) => {
        let { checkBoxValues, input, error, touched, label } = props;
        return checkBoxValues.map((checkBoxValue, index) => {
            return (
                <div key={index}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name={`${input.name}[${index}]`}
                                value={checkBoxValue.name}
                                checked={input?.value?.indexOf(checkBoxValue.name) !== -1}
                                onChange={(event) => {  
                                    const newValue = [...input.value];   
                                    if (event.target.checked) {
                                        newValue.push(checkBoxValue.name);
                                    }
                                    else {
                                        newValue.splice(newValue.indexOf(checkBoxValue.name), 1)
                                    }
                                    return input.onChange(newValue);
                                }
                            }
                            />} label={checkBoxValue.name} />

                    {touched &&
                        (error &&
                            <span className="vErrorText">{label}{error}</span>
                        )}
                </div>
            );
        });
    }
    return (
        <>
            <FormLabel>Check Your Hobbies</FormLabel>
            <FormGroup row style={{ marginLeft: '40%' }}>
                {RenderCheckBoxes(props)}
            </FormGroup>
        </>
    );
}
