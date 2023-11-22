import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from '../components/Form'
import Nav from '../components/Nav'
import About from '../page/About'
import Home from '../page/Home'
import Search from '../page/Search'
import{Route, Routes} from "react-router-dom";

function App() {
  
     

      return (
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      );
    }
    export default App;