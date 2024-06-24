import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutMePage from './pages/AboutMePage';
import Projects from './pages/Projects';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutMePage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
