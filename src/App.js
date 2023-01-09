import './App.css';
import OutraLista from './components/OutraLista';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form';
// import Condicional from './components/Condicional';

function App() {

  const meusItens = ['React', 'Vue', 'Angular', 'JS', 'HTML']

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
