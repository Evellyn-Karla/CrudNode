import react from 'react';

export default function ButtonNew({clickBtn}) {
  

  return (

    <div id="btn-create" onClick={clickBtn}>

      <h2>Adicionar nova receita</h2>

      <img id="add-icon" src="css/add-circle-outline.svg" alt="" />

    </div>

  );

}

