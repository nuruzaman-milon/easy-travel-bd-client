<<<<<<< HEAD
import { Toaster } from 'react-hot-toast';
=======
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
>>>>>>> da2cd6350297899478c4cd5d8e62d749349c8dc7
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { auth } from './firebase/firebase.config';
import { setLogin, setLogOut } from './redux/userSlice';
import { router } from './routes/Routes/Routes';

function App() {
<<<<<<< HEAD
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
      <div><Toaster /></div>
=======
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setLogin({ user: user })
        )
      }
      else {
        dispatch(setLogOut({ user: null }))
      }
    })
  }, [])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
>>>>>>> da2cd6350297899478c4cd5d8e62d749349c8dc7
    </>
  );
}

export default App;