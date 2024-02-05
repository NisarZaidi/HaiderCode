import { BrowserRouter as Router,Route ,Routes, Navigate } from 'react-router-dom'
import Navber from './componant/Navber'
import { Home } from './componant/home'
import { About } from './componant/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './componant/Footer';
// import { Logain } from './componant/Logain';

function App() {

  return (
    <Router>
      <Navber />
      <Routes>
        {/* <Route path='/logain' element={<Logain/>} /> */}
        {/* <Route path='*' element={<Navigate to='/logain' />} /> */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
