import './App.css'
import { AuthProvider } from './features/auth/auth.context';
import { router } from './router'
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    
  )
}

export default App
