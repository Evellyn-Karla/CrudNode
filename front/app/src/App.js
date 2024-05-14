import React, { useState, useEffect } from 'react';
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
    getReceitas();
  }

  const [receitasI, setReceitasI] = useState()
  
  const getReceitas = async () => {
    const response = await fetch('https://61705914-beb2-49c1-a761-95d3eb82ac0d-00-qau7r1kk0chc.riker.replit.dev:3001/read', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      const data = await response.json();
      console.log("response",  response, "data", data)
      setReceitasI(data)
  };
  
  useEffect(() => {
    getReceitas();
  }, [])



    return (
        <div className="App">
            <Header />
            <ButtonNew clickBtn={clickBtnNew} />
          <div id="lista-modal">
            <Lista receitasData = {receitasI}/>
            {modalOpen && <Modal onClose={closeModal} /> }
            <View />
          </div>  
        </div>
    );
}