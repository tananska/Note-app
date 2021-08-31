import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {showNoteModal} from '../redux/actions/modalActions';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';


function Header(){
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.inputs.isOpen);

    const showModal = () => {
      console.log('isOpenShow: ', isOpen);
      dispatch(showNoteModal({
        isOpen
      }))
    }
    return (
      <header>
        <h1>Keeper</h1>
      <button className="headerButton" onClick={showModal}><AddIcon /></button>
      <button className="headerButton"><SearchIcon /></button>
      </header>
    );
}


export default Header;