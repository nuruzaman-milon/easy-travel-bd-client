import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes/Routes';

function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
      <div><Toaster /></div>
    </>
  );
}

export default App;