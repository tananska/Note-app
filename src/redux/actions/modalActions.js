import actionTypes from '../actionTypes';


  const setNoteId = (id) => ({
    type: actionTypes.SET_NOTE_ID,
    id,
  })
  const resetInputs = () => ({
    type: actionTypes.RESET_INPUT,
  })
  
  const showNoteModal = (isOpen) => {
    return {
    type: actionTypes.SHOW_MODAL,
    payload: isOpen,
    };
  }
  const hideNoteModal = (isOpen) => {
    return {
    type: actionTypes.HIDE_MODAL,
    payload: isOpen,
    };
  }

  
    export {setNoteId, resetInputs, showNoteModal, hideNoteModal};