import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { auth } from './firebase/firebase.config';
import { setLogin, setLogOut } from './redux/userSlice';
import { router } from './routes/Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      </RouterProvider>
      <div><Toaster /></div>
    </QueryClientProvider>
  );
}

export default App;