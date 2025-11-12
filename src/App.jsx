import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import './App.css'
import MainPage from './MainPage/MainPage.jsx'
import GamePage from './GamePage/GamePage.jsx'
import ImagePage from './ImagePage/ImagePage.jsx'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path ="/" element = {<MainPage />} />
      <Route path ="/game" element = {<GamePage />} />
      <Route path ="*" element = {<MainPage />} />
      <Route path ="/image" element = {<ImagePage />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
