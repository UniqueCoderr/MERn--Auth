import { BrowserRouter, Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
export default function App() {
  return <BrowserRouter>
        <Router>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-out' element={<SignUp/>} />
        </Router>
      </BrowserRouter>
    
  
}
