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
          </Routes>
        </AuthContextApp>
      </AuthProvider>
    </>
  );
}

export default App;
