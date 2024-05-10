import Header from "./components/Header";
import ModalLista from "./components/Lista";
import ButtonNew from "./components/ButtonNew"


export default function App() {
    return (
        <div className="App">
            <Header />
            <ButtonNew />
            <ModalLista />
        </div>
    );
}