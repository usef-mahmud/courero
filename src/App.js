import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


import './App.scss';
import Singup from './pages/Signup/Singup';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
