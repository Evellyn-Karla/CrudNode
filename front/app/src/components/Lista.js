import React from 'react'

export default function lista({receitasData}) {

  
  const receitas = receitasData

  console.log(receitas, receitasData)
  return (

    <ul id="lista">

{receitas
  && receitas.map((receita, index) => {
  <li id="receita-lista">
    <div key={index} class='pai'>
      <header>
        <h2>{receita.nome}</h2>
      </header>
      <div class="info-resumo">
        <div class="tempo">
          <p>{receita.tempo}</p>
          <img src="css/time-outline.svg" alt="" />
        </div>
        <div class="rendimento">
          <p>{receita.rendimento}</p>
          <img src="css/icons8-gráfico-de-pizza-64.png" alt="" />
        </div>
      </div>
    </div>
  </li>
})}
      {receitas.length === 0 && <li id="vazio">
        <h2>Nenhuma receita adicionada.</h2>
      </li>
      }

    </ul>

  );

}

