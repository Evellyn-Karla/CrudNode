export default function Modal() {

  return (

    <div id="modal">

      <div id="add-receita">

        <header id="modal-title">

          <h1 id="modal-modo">Nova receita</h1>

          <img id="x" src="css/close-circle-outline.svg" alt="X" />

        </header>



        <form id="myform">

          <div id="myform-pai">

            <div id="div-nome">

              <input

                type="text"

                id="nome"

                class="book-field"

                placeholder="Nome da receita"

                required

              />

            </div>

            <div id="myform-row">

              <div id="div-tempo">

                <input

                  type="text"

                  id="tempo"

                  class="book-field"

                  placeholder="Tempo de preparo"

                  required

                />

              </div>

              <div id="div-rend">

                <input

                  type="text"

                  id="rendimento"

                  class="book-field"

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

                  class="book-field"

                  rows="5"

                  placeholder="Ingredientes"

                ></textarea>

              </div>

              <div id="div-preparo">

                <textarea

                  name="preparo"

                  id="preparo"

                  class="book-field"

                  rows="5"

                  placeholder="Modo de preparo"

                ></textarea>

              </div>

            </div>

          </div>

        </form>



        <footer id="modal-footer">

          <button id="salvar" class="btn-save">

            Salvar

          </button>

          <button id="cancelar" class="btn-cancel">

            Cancelar

          </button>

        </footer>

      </div>

    </div>

  );

}

