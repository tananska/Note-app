import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import Note from './Note';
import {setNoteContent, setNoteTitle,setNoteId, resetInputs} from '../redux/actions/modalActions';

const NoteList = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes)
    const onItemClicked = (item, index) => {
        dispatch(setNoteId(index));
        dispatch(setNoteTitle(item.title));
        dispatch(setNoteContent(item.content));
      }
    
      if(notes.length === 0) {
        return (
          <div className="notesList-empty">
            <p>There is no note yet. Please add one.</p>
          </div>  
        )

      }
    return (
    <div className='notes-list'>
        {notes.map((item, index) => {
            if(item) {
            return (
                <Note
                title={item.title}
                content={item.content}
                onItemClicked={() => {
                    onItemClicked(item, index);
                }}
                />      
              )
            }
            return null;
        })}
    </div>
    );
};
export default NoteList;