 import actionTypes from '../actionTypes';
 
  const addNote = (note) => {
    return {
    type: actionTypes.ADD_NOTE,
    payload: note
    };
  }
  const updateNote = (index, note) =>{
    return {
      type: actionTypes.UPDATE_NOTE,
      payload: index, 
      note
    };
  }
  const deleteNote = (index) =>{
    return {
    type: actionTypes.DELETE_NOTE,
    payload: index
    };
  }

  export {addNote, updateNote, deleteNote};