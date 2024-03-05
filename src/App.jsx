
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Landing from './components/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import Watch from './components/Watch'





function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Landing/>}/>
      <Route path='/home'element={<Home/>}/>
      <Route path='/watch'element={<Watch/>}/>

 
    </Routes>
    <Footer/>
    </>
  )
}

export default App
