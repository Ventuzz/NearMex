import { Routes, Route } from 'react-router-dom';
import LugarDetalle from './pages/LugarDetalle';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Hero />} />
      <Route path = "/lugares/:id" element = {<LugarDetalle />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
