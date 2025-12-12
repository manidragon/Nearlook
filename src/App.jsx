import './App.css'
import Header from './Components/Header/Header.jsx'
import Home from './Pages/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Home />
    </>
  );
}

export default App
