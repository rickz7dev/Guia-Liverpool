import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rodape from './components/Rodape/Rodape';
import Home from './pages/Home/Home';
import Lugares from './pages/Lugares/Lugares';
import Dicas from './pages/Dicas/Dicas';
import Sobre from './pages/Sobre/Sobre';

function App() {
  return (
    <BrowserRouter>
      {/* navbar e rodape ficam fora do Routes pra aparecer em todas as paginas */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lugares" element={<Lugares />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default App;
