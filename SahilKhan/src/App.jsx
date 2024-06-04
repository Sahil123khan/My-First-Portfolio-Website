import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import Resume from './components/Resume'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <>

      <Header />
      <div>
      <Main />
      <Resume />
      <Footer />
      </div>
      
    </>
  )
}

export default App
