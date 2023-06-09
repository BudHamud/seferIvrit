
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from './components/Game';
import Words from './pages/Words';
import Header from './components/Header';
import Learn from './pages/Learn';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/words' element={ <Words /> } />
    <Route path='/learn' element={ <Learn /> } />
    <Route path='/learn/:game' element={ <Game /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;