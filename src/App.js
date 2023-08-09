import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Home from './Pages/Home';
import Footer from './Layout/Footer';
import Enquiry from './Pages/Enquiry';
import Packages from './Pages/Packages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/enquiry' element={<Enquiry />}></Route>
          <Route path='/packages' element={<Packages />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
