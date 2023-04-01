import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss';
import Singup from './pages/Signup/Singup';
function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Singup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
