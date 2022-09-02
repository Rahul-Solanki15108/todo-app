import { Typography } from '@mui/material';
import ItemsListing from './FormComponents/ItemsListing';

const TodoList = () => {
    return (
        <>
            <Typography variant="h4" component="h5">
                All Task List
            </Typography>
            <ItemsListing />
        </>
    );
}

export default TodoList;
