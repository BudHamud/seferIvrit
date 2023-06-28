import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Words from './pages/Words';
import Header from './components/Header';
import Unit from './pages/Unit';
import Home from './pages/Home';
import Footer from './components/Footer';
import Learn from './pages/Learn';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/words' element={ <Words /> } />
    <Route path='/unit' element={ <Unit /> } />
    <Route path='/learn' element={ <Learn /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;