import React from 'react'
import Navbarmenu from './Comps/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextControlsExample from './Comps/Forms';
import './index.css'
import './App.css'
import Footer from './Comps/Footer';

export default function App() {
  return (
    <div><Navbarmenu></Navbarmenu>
        <TextControlsExample></TextControlsExample>
        <Footer></Footer>
    </div>
  )
}
