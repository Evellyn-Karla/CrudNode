export default function View() {

  return (

    <div id="view">

      <div className="fechar">

        <div id="btn">

          <div id="edit-btn">

            <p>Editar</p>

          </div>

          <div id="delete-btn">

            <p>Excluir</p>

          </div>

        </div>

        <img id="x2" src="./public/assets/close-circle-outline.svg" alt="X" />

      </div>

      <div id="view2">

        <div className="nome">

          <h2 id="nome"></h2>

        </div>

        <div className="info">

          <div className="tempo">

            <h3>Tempo:</h3>

            <p id="tempo"></p>

          </div>

          <div className="rend">

            <h3>Rendimento:</h3>

            <p id="rend"></p>

          </div>

        </div>

        <div className="ingred">

          <h3>Ingredientes:</h3>

          <p id="ingred">ddddds</p>

        </div>

        <div className="preparo">

          <h3>Modo de preparo:</h3>

          <p id="preparo"></p>

        </div>

      </div>

    </div>

  );

}

