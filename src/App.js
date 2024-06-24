import { Routes, Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import Wale from './Pages/Wale/Wale';
import Form from './Pages/Form/Form';
import Signup from './Pages/Signup/Signup';

function App() {
  // const Saba = 'Man'
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path='about' element={<About />}/>
          <Route path='wale' element={<Wale />}/>
          <Route path='signup' element={<Signup />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='form' element={<Form />}/>
        </Route>
      </Routes>
      {/* <Homepage /> */}
    </BrowserRouter>
  );
}

export default App;
