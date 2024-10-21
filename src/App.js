import './App.css';
import Nav from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App2 from './App2';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Projects from './Components/Project';
import Contact from './Components/Contact';

function App() {
  return (
    
      
  
      <>


  <Router>
      <Nav/>
    
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/project' element={<Projects/>,<App2 />} />
      <Route path='/Contact' element={<Contact />}/>
      
      
    </Routes>
      <Footer /> 
         
    </Router>
      </>
     
  )
}

export default App;
