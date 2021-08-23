import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addNote, deleteNote} from '../redux/actions/noteActions';
import {setNoteContent, setNoteTitle,setNoteId, resetInputs} from '../redux/actions/modalActions';


const Modal = () =>{
    const id = useSelector(state => state.inputs.id);
    const title = useSelector(state => state.inputs.title);
    const content = useSelector(state => state.inputs.content);
    const dispatch = useDispatch();

    const addNote = () => {
        if(title && content) {
          dispatch(addNote({
            title,
            content
          }))
          dispatch(resetInputs())
        }
      }
    
      const deleteNote = () => {
        dispatch(deleteNote(id))
        dispatch(resetInputs())
      }
    
    return( 
        <div className="modal" >
            <form className="modal-content">
                <input
                    placeholder="Title"
                    value={title}
                    onChange={e => 
                    dispatch(setNoteTitle(e.target.value))
                    }
                />
            

                <textarea
                    placeholder="Take a note..."
                    value={content}
                    onChange={e => 
                    dispatch(setNoteContent(e.target.value))
                    }

                />
                <div className="modalAddBtn">
                <button onClick={addNote}>Add</button>
                </div>
                
                <div className="modalCloseBtn">
                <button onClick={deleteNote}>Close</button>
                  </div>
        
            </form>   
        </div>
    );
};
export default Modal;