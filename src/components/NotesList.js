import React from "react";
import {useDispatch} from 'react-redux';
import {deleteNote} from '../redux/actions/noteActions';
import {useSelector } from 'react-redux';
import Note from './Note';

const NoteList = () => {
  
  const dispatch = useDispatch();
  const allNotes = useSelector(state => state.notes.notes);

    return(
    <>
      {
        allNotes.map((note, index) => {
          return <Note  title={note.title} content={note.content} onItemClicked={()=> {dispatch(deleteNote(index))}}/>
        })
      }
    </>
    )
  };
export default NoteList;