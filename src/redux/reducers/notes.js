import actionTypes from "../actionTypes"
const initialState = {
    notes: []
}

const notes = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.ADD_NOTE:{
                const notes = [...state.notes];
                notes.push(action.note);
                return {
                    notes,
            }
        }
        case actionTypes.DELETE_NOTE:{
            const {index} = action;
            const notes = [];
            state.notes.forEach((note, i) => {
                if(index !== i) {
                  notes.push(note)
                }
            })      
            return {
              notes,
            }
        }
        default: 
        return state;
    }
}
export default notes;