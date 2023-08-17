import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Unit from './pages/Unit';
import Home from './pages/Home';
import Footer from './components/Footer';
import Learn from './pages/Learn';
import Community from './pages/Community';
import Read from './pages/Read';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/unit' element={ <Unit /> } />
    <Route path='/read/:lesson' element={ <Read /> } />
    <Route path='/learn/:lesson' element={ <Learn /> } />
    <Route path='/chat' element={ <Community /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;