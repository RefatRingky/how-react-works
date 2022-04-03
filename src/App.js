import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NavBar from './component/NavBar/NavBar';
import NotFound from './component/NotFound/NotFound';
import Videos from './component/Videos/Videos';



function App() {
  return (
    <>
     
     <NavBar></NavBar>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/videos' element={<Videos></Videos>}></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
