import React, { useState } from 'react'
import Header from "./components/Header";
import Lista from "./components/Lista"
import Modal from "./components/Modal"
import View from "./components/View"
import ButtonNew from "./components/ButtonNew"


export default function App() {

  const [modalOpen, setModalOpen] = useState(false)
  function clickBtnNew(e) {
    e.preventDefault();
    console.log("clicou");

    openModal();
 }
  function openModal() {
    setModalOpen(true);
   console.log("abriu");
  };

  function closeModal() {
    setModalOpen(false);
    console.log("fechou");
  }

  


    return (
        <div className="App">
            <Header />
            <ButtonNew clickBtn={clickBtnNew} />
          <div id="lista-modal">
            <Lista />
            {modalOpen && <Modal onClose={closeModal} /> }
            <View />
          </div>  
        </div>
    );
}