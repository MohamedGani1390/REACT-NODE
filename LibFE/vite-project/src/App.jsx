import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'; 
import MyNavbar from './components/MyNavbar';

function App() {

  return (
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
