import actionTypes from '../actionTypes';

const initialState = {
  id: -1,
  title: '',
  content: '',
  isOpen: false,
}

const inputs = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    
    /*case actionTypes.SET_NOTE_ID: {
      const { id } = action;
      return {
        ...state,
        id: action.playload
      }
    }*/
    case actionTypes.SHOW_MODAL: {
      return {
        ...state,
        isOpen: true
      }
    }
    case actionTypes.HIDE_MODAL: {
      return {
        ...state,
        isOpen: false
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }

    default:
      return state;
  }
}
export default inputs;