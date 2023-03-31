import {BrowserRouter, Routes, Route} from 'react-router-dom'
import register from './DB/registerUser'

import './App.scss';
function App() {
  
  const signup = async () => {
    const res = await register('yousef', 'mahmoud', 'mostafaahmad@proton.me', 'pass')

    if(res.error == true){
      console.log(res.message)
    }else{
      console.log('succeed')
    }
  }

  return (
    <div className="App">
      <button onClick={signup}>
        click me
      </button>
    </div>
  )
}

export default App;
