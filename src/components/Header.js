import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useDispatch, useSelector } from 'react-redux';



function Header(){
  /*const dispatch = useDispatch();

  showModal = () => {
    dispatch(showModal())
}*/
    return (
      <header>

        <h1>Keeper</h1>
        <button><SearchIcon /></button>
        <button ><AddIcon /></button>
      </header>
    );
}


export default Header;