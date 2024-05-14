import React from "react";

export default function lista({ receitasData}) {
  const receitas = receitasData || [];

  
  
  

  
  
  
  return (
    <ul id="lista">
      {receitas &&
        receitas.map((receita, index) => (
          <li key={index} id="receita-lista">
            <div className="pai">
              <header>
                <h2>{receita.nome}</h2>
              </header>
              <div className="info-resumo">
                <div className="tempo">
                  <p>{receita.tempo}</p>
                  <img src="css/time-outline.svg" alt="" />
                </div>
                <div className="rendimento">
                  <p>{receita.rendimento}</p>
                  <img src="css/icons8-gráfico-de-pizza-64.png" alt="" />
                </div>
              </div>
            </div>
            <button onClick={console.log(index)}>id </button>
          </li>
        ))}
      {receitas.length === 0 &&
        <li id="vazio">
          <h2>Nenhuma receita adicionada.</h2>
        </li>
      }
    </ul>
  );
}
