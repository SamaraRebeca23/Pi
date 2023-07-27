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
    {/* Cabecalho tem um propriedade chamada titulo*/}
    <Cabecalho  logo ="captura de tela (1).png" titulo = "Dearfav" subtitulo="The best!"/>
    <Conteudo/> 
    <Rodape logo ="facebook_4494464.png" />
    </>
  );
}

export default App;
