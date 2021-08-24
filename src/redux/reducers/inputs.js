import actionTypes from '../actionTypes';

const initialState = {
  id: -1,
  title: '',
  content: '',
  isModalShowing: false,
}

const inputs = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOTE_TITLE: {
      const { title } = action;
      return {
        ...state,
        title,
      }
    }
    case actionTypes.SET_NOTE_CONTENT: {
      const { content } = action;
      return {
        ...state,
        content,
      }
    }
    case actionTypes.SET_NOTE_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    /*case actionTypes.SHOW_MODAL: {
      const {isModalShowing } = action;
      return {
        ...state,
        isModalShowing,
      }
    }
    case actionTypes.HIDE_MODAL: {
      const {isModalShowing } = action;
      return {
        ...state,
        isModalShowing,
      }
    }*/

    default:
      return state;
  }
}
export default inputs;