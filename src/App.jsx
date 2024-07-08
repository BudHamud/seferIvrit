import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Unit from './pages/Unit';
import Home from './pages/Home';
import Footer from './components/Footer';
import Learn from './pages/Learn';
import Community from './pages/Community';
import Read from './pages/Read';
import Words from './pages/Words';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/unit' element={ <Unit /> } />
    <Route path='/read' element={ <Read /> } />
    <Route path='/learn' element={ <Learn /> } />
    <Route path='/chat' element={ <Community /> } />
    <Route path='/words' element={ <Words /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;