import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addNote, deleteNote} from '../redux/actions/noteActions';
import {setNoteContent, setNoteTitle,setNoteId, resetInputs} from '../redux/actions/modalActions';
import Modal from "react-bootstrap/Modal";

const ModalNote = () =>{
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
        const [isOpen, setIsOpen] = React.useState(false);

        const showModal = () => {
          setIsOpen(true);
        };

        const hideModal = () => {
          setIsOpen(false);
        };
    
    
    return(
      <>
      <button onClick={showModal}>Display Modal</button>
        <Modal show={isOpen} onHide={hideModal} className="modal">
            <Modal.Body><form className="modal-content">
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
                <button >Add</button>
                </div>
                
                <div className="modalCloseBtn">
                <button onClick={hideModal}>Close</button>
                  </div>
        
            </form>  
        </Modal.Body> 
      </Modal>
    </>
  );
};
export default ModalNote;