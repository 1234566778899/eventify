import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomeApp } from './components/HomeApp';
import { Register } from './components/Register';
import { ListSpace } from './components/ListSpace';
import { Explore } from './components/Explore';
import { Login } from './components/Login';
import { Terms } from './components/Terms';
import { Space } from './components/Space';
import { Profile } from './components/Profile';



function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomeApp />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/listspace' element={<ListSpace />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/terms' element={<Terms />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/space/:id' element={<Space />} />
      </Routes>
    </>
  );
}

export default App;
