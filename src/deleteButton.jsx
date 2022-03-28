import React from 'react';

const DeleteButton = ({checkListArray, id, setCheckListArray}) => {
    const deleteInCheckList = () => {
        checkListArray.filter((item) => {
            if (item.id === id) {
                return checkListArray
            }
        })
    }
    return (
        <div id={id} onClick={deleteInCheckList}>X</div>
    );
};

export default DeleteButton;