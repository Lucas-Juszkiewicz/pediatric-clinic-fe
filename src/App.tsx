import { Routes, Route } from 'react-router-dom'
import './App.css'
import { FrontPage, MainPage } from '@/pages';

function App() {

  return (
    <div className='app'>
      <Routes>
      <Route path='/' element={<FrontPage />} />
      <Route path='/mainPage' element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
