import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Default/Home';
import Enquiry from './Pages/Default/Enquiry';
import Packages from './Pages/Default/Packages';
import About from './Pages/Default/About';
import Gallery from './Pages/Default/Gallery';
import Dashboard from './Pages/Admin/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Enquiry/>}></Route>
          <Route path='/packages' element={<Packages />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>




          <Route path='/admin-dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
