import { Link, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Createaccount from './page/createaccount'
import Login from './page/login'
import Uplode from './page/uplode'

const App=()=> {
  return (
    <>
      <Router>
        <Navbar>
          <Link to="/">Login</Link>
        </Navbar>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/createaccount' element={<Createaccount/>}></Route>
          <Route path='/uplode' element={<Uplode/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
