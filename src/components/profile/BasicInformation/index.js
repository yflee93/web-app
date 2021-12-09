import React, { useState, Fragment } from "react";
import ShowInfoScreen from './ShowInfoScreen';
import EditInfoScreen from './EditInfoScreen';

const BasicInformation = ({owns}) => {
    const [inEdit, setInEdit] = useState(false);
    const toggleEdit = () => {
        setInEdit(!inEdit);
    }
    return (
        <Fragment>
            {inEdit ?
                <EditInfoScreen toggle={toggleEdit} /> :
                <ShowInfoScreen toggle={toggleEdit} owns={owns}/>}
        </Fragment>
    );
}

export default BasicInformation;
