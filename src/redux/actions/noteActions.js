 import actionTypes from '../actionTypes';
//let nextTodoId = 0;


  const addNote = (note) => ({
    type: actionTypes.ADD_NOTE,
    note
  })
  const deleteNote = (index) =>({
    type: actionTypes.DELETE_NOTE,
    index
  })

  export {addNote, deleteNote};