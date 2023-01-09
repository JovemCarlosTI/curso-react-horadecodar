import './App.css';
import {useState} from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
// import OutraLista from './components/OutraLista';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form';
// import Condicional from './components/Condicional';

function App() {

  // const meusItens = ['React', 'Vue', 'Angular', 'JS', 'HTML']
  const [nome, setNome] = useState('')

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
