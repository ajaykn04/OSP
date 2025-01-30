import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Log from './component/Log';
import Home from './component/Home';
import Add from './component/Add';




function App() {
  
  document.body.style.backgroundColor = '#0f0f0f';

  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/add' element={<Add/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Log/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
