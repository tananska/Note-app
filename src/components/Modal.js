
import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addNote as addNoteAction} from '../redux/actions/noteActions';
import {resetInputs, hideNoteModal} from '../redux/actions/modalActions';
import Modal from "react-bootstrap/Modal";

const NoteModal = () =>{
  
  const dispatch = useDispatch();
  //const id = useSelector(state => state.inputs.id);
  const isOpen = useSelector(state => state.inputs.isOpen);

  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  
    const addNote = (e) => {
      e.preventDefault();
      console.log('addNote: ', title, content);
        if(title && content) {
          dispatch(addNoteAction({
            title,
            content
          }))
          
        }
        dispatch(resetInputs());
      }
      /*const updateNote =() => {
        if(title && content){
          dispatch(updateNoteAction(id,{
            title,
            content
          }))
          dispatch(resetInputs())
        }
      }*/
      const hideModal = (e) => {
        e.preventDefault();
        console.log('isOpen: ', isOpen);
        dispatch(hideNoteModal({
          isOpen
        }))
      }

    return (
      <>
        <Modal show={isOpen} className="modal">
            <Modal.Body>
              <form className="modal-content">
                  
                  <input
                      placeholder="Title"
                      value={title}
                      onChange={e =>setTitle(e.target.value)}
                  />

                  <textarea
                      placeholder="Take a note..."
                      value={content}
                      onChange={e =>{
                        setContent(e.target.value)
                      }}
                      
                  />
                  <div className="modalAddBtn">
                  <button onClick={addNote}>Add</button>
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
export default NoteModal;