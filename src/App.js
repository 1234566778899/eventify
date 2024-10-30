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
import { AuthContextApp } from './contexts/AuthContextApp';
import { AuthProvider, useFirebaseApp } from 'reactfire';
import { getAuth } from 'firebase/auth';
import { Orders } from './components/Orders';
import { Details } from './components/Details';
import { Success } from './components/Sucess';
import { Failure } from './components/Failure';
import { Pending } from './components/Pending';
import Suscribing from './components/Suscribing';

function App() {
  const firestoreInstance = getAuth(useFirebaseApp());
  return (
    <>
      <AuthProvider sdk={firestoreInstance}>
        <AuthContextApp>
          <Routes>
            <Route exact path='/' element={<HomeApp />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/listspace' element={<ListSpace />} />
            <Route exact path='/explore' element={<Explore />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/terms' element={<Terms />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/details/:id' element={<Details />} />
            <Route exact path='/space/:id' element={<Space />} />
            <Route exact path='/orders' element={<Orders />} />
            <Route exact path='/suscribing' element={<Suscribing />} />
            <Route exact path='/success' element={<Success />} />
            <Route exact path='/failure' element={<Failure />} />
            <Route exact path='/pending' element={<Pending />} />
          </Routes>
        </AuthContextApp>
      </AuthProvider>
    </>
  );
}

export default App;
