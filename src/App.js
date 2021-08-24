import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteList from "./components/NotesList";
import ModalNote from "./components/Modal";
import store from "./redux/store";
import {Provider} from 'react-redux';



function App(){
  
  return (
    <Provider store= {store}>
      <div className='container'>
        <Header />
        <ModalNote />
        <NoteList />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
