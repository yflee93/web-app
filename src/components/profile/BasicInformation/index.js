import React, { useState, Fragment } from "react";
import ShowInfoScreen from './ShowInfoScreen';
import EditInfoScreen from './EditInfoScreen';

const BasicInformation = () => {
    const [inEdit, setInEdit] = useState(false);
    const toggleEdit = () => {
        setInEdit(!inEdit);
    }
    return (
        <Fragment>
            {inEdit ? <EditInfoScreen toggle={toggleEdit}/> : <ShowInfoScreen toggle={toggleEdit}/>}
        </Fragment>
    );
}

export default BasicInformation;
