import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Conteudo,{OlaMundo} from './componentes/Conteudo' 
import Rodape from './componentes/Rodape'

/*
Arquivo App JSX
Componentem funcional = Porque ele é uma função.
*/
function App() {

  OlaMundo();
/* todo componente de retornar  um html entre parenteses*/
  return (
    /* O react substitui className por class porque class é palavra reservada pro JS */
    <>
    <img src= 'logo.png' alt= 'logotipo'></img>
    {/* Cabecalho tem um propriedade chamada titulo*/}
    <Cabecalho  logo ="logo192.png" titulo = "Fav.io" subtitulo="The bessssttttt!!"/>
    <Conteudo/> 
    <Rodape/>
    </>
  );
}

export default App;
