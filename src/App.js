
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Works from './pages/Works';
import Display from './pages/Display';
import List from './pages/List';
import Blog from './pages/Blog';
import Admindisplay from './pages/Admindisplay';
import Adminedit from './pages/Adminedit';







function App() {

useEffect(()=>{
aos.init()
},[])
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/works' element={<Works/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/list' element={<List/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/admindisplay' element={<Admindisplay/>}></Route>
        <Route path='/adminedit' element={<Adminedit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
