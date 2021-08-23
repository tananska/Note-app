import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteList from "./components/NotesList";
import Modal from "./components/Modal";
import store from "./redux/store";
import {Provider} from 'react-redux';



function App(){
  
  return (
    <Provider store= {store}>
      <div className='container'>
        <Header />
        <Modal />
        <NoteList />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
