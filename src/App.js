import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {

  return (
    <Router>
      {/* Cabeçalho, independente da página */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />}/>
      </Routes>
      {/* Rodapé, independente da página */}
      <Footer />
    </Router>
  );
}

export default App;