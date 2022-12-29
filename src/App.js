import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <Frase />
      <SayMyName name="Carlos" />
      <Pessoa name="Carlos" idade="18" profissao="Desenvolvedor" foto="https://avatars.githubusercontent.com/u/59931270?v=4" />
      <List />
      <Evento />
      <Form />
    </div>
  );
}

export default App;
