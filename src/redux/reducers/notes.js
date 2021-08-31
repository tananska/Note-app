import actionTypes from "../actionTypes";

const initialState = {
    notes: []
  }

const notes = (state = initialState, action) =>{
    console.log(action);
    switch(action.type){
        case actionTypes.ADD_NOTE:
            return {
            //...state,
                notes: [...state.notes, action.payload]
            }
        
        /*case actionTypes.UPDATE_NOTE:{
            const {index, note} = action;
            const notes = [...state.notes];
            notes[index] = note
            return{
                notes,
            }
        }*/
        case actionTypes.DELETE_NOTE:
            const {index} = action;
            const notes = [...state.notes];
            notes.splice(index, 1);
          return {
              notes,
          }
        
        default: 
        return state;
    }
}
export default notes;