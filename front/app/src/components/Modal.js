import React, { useState } from 'react';

export default function Modal({onClose}) {

  const [inputValues, setInputValues] = useState({input1: "", input2: "", input3: "", input4: "", input5:""});

  
  function handleClose() {
    setInputValues({
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: ''
    });
    onClose();
  }


  // const [receita, setReceita] = useState({
  //   nome: inputValues.input1,
  //   tempo: inputValues.input2,
  //   rendimento: inputValues.input3,
  //   ingredientes: inputValues.input4,
  //   preparo: inputValues.input5
  // });

  
  function handleChange(e, inputName) {
    setInputValues(prevState => ({
      ...prevState,
      [inputName]: e.target.value
    }));

  //   setReceita(prevReceita => ({
  //   ...prevReceita,
  //   [inputName]: e.target.value
  // }));
    
  }
  
  const handleSave= async (e) => {
    e.preventDefault();
    try {
      const receitaData = {
      nome: inputValues.input1,
      tempo: inputValues.input2,
      rendimento: inputValues.input3,
      ingredientes: inputValues.input4,
      preparo: inputValues.input5
      };
      // const response = await axios.post('https://61705914-beb2-49c1-a761-95d3eb82ac0d-00-qau7r1kk0chc.riker.replit.dev/create', receitaData); // Enviar dados para a API
      const response = await fetch('https://61705914-beb2-49c1-a761-95d3eb82ac0d-00-qau7r1kk0chc.riker.replit.dev:3001/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receitaData)
    });
      console.log('Item adicionado', response.data);
      handleClose();
      // Lógica adicional, como atualizar a lista de itens após adicionar um novo
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
    }
  };
  
  return (

    <div id="modal">

      <div id="add-receita">

        <header id="modal-title">

          <h1 id="modal-modo">Nova receita</h1>

          <img id="x" src="css/close-circle-outline.svg" alt="X" onClick={handleClose}/>

        </header>



        <form id="myform">

          <div id="myform-pai">

            <div id="div-nome">

              <input

                type="text"

                name="nome"

                id="nome"

                value={inputValues.input1}

                onChange={(e) => handleChange(e, 'input1')}

                className="book-field"

                placeholder="Nome da receita"

                required

              />

            </div>

            <div id="myform-row">

              <div id="div-tempo">

                <input
                  name="tempo"

                  type="text"

                  id="tempo"

                  value={inputValues.input2}

                  onChange= {(e) => handleChange(e, 'input2')}

                  className="book-field"

                  placeholder="Tempo de preparo"

                  required

                />

              </div>

              <div id="div-rend">

                <input

                  name="rendimento"

                  type="text"

                  id="rendimento"
                  
                  value={inputValues.input3}

                  onChange={(e) => handleChange(e, 'input3')}

                  className="book-field"

                  placeholder="Rendimento"

                  required

                />

              </div>

            </div>

            <div id="form-column">

              <div id="div-ingre">

                <textarea

                  name="ingredientes"

                  id="ingredientes"

                  value={inputValues.input4}

                  onChange={(e) => handleChange(e, 'input4')}
                  className="book-field"

                  rows="5"

                  placeholder="Ingredientes"

                ></textarea>

              </div>

              <div id="div-preparo">

                <textarea

                  name="preparo"

                  id="preparo"

                  value={inputValues.input5}

                  onChange={(e) => handleChange(e, 'input5')}

                  className="book-field"

                  rows="5"

                  placeholder="Modo de preparo"

                ></textarea>

              </div>

            </div>

          </div>

        <footer id="modal-footer">

          <input type="submit"  id="salvar" className="btn-save" onClick={handleSave} value="Salvar">

          </input>

          <button id="cancelar" className="btn-cancel" onClick={handleClose}>

            Cancelar

          </button>

        </footer>
          </form>

      </div>

    </div>

  );

}

