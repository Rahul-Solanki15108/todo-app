import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ConfirmBoxDelete from './ConfirmBoxDelete';
import ActionComponent from './ActionComponent';

function ItemsListing(props) {

    let alltaskData = useSelector(state => state?.TaskReducer.IS);
    const [open, setOpen] = useState(false);
    const [todoId,settodoId] = useState();
    const handleDeleteTask = (id) => {
        settodoId((id));
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const columns = [
        { name: "userName", label: "User name" },
        { name: "taskName", label: "Task name" },
        { name: "hobbies", label: "Hobbies" },
        { name: "gender", label: "Gender" },
        { name: "date", label: "Date" },
        { name: "age", label: "Age" },
        { name: "status", label: "status" },
        {
            name: "Action",
            options: {
                customBodyRenderLite: (id) => {
                    return (
                        <ActionComponent Id={id} handleDeleteTask={handleDeleteTask}/>
                    );
                }
            }
        }      
    ];
    const options = {
        filterType: 'checkbox',
    };
    return (
        <>
         <ConfirmBoxDelete open={open} close={handleClose} id={todoId}/>
            <MUIDataTable
                title={"Task List"}
                data={alltaskData}
                columns={columns}
                options={{
                    selectableRows: false, // <===== will turn off checkboxes in rows,
                    print : false,
                    download : false,
                    hover:false,
                    filter:false,
                    viewColumns:false
                  }}
            />

        </>
    );
}

export default ItemsListing;