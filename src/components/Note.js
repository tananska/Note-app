import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({title,content, onItemClicked}) => {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button 
                className="deleteButton" 
                onClick={onItemClicked}>
                    <DeleteIcon />
            </button>  
        </div>
    );
};
export default Note;