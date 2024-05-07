import View from "./View"
import Lista from "./Lista"
import Modal from "./Modal"


export default function ModalLista() {
  return (
    <div id="lista-modal">
      <Lista />
      <Modal />
      <View />
    </div>
  );
}