import actionTypes from '../actionTypes';


  const setNoteTitle = (title) => ({
    type: actionTypes.SET_INPUT_TITLE,
    title,
  })
  const setNoteContent = (content) => ({
    type: actionTypes.SET_INPUT_CONTENT,
    content
  })
  const setNoteId = (id) => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  })
  const resetInputs = () => ({
    type: actionTypes.RESET_INPUT,
  })
  const showModal = () =>({
    type: actionTypes.SHOW_MODAL,
  })
  const hideModal = () =>({
    type: actionTypes.HIDE_MODAL,
  })

    export {setNoteTitle, setNoteContent, setNoteId, 
      resetInputs, showModal, hideModal};