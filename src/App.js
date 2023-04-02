import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


import './App.scss';
import Singup from './pages/Signup/Singup';
import { ToastContainer } from 'react-toastify';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
function App() {

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Singup />} />
          <Route path='/auth/verify-email/:id' element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
