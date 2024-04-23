import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Layout from './Layout/Layout';
import UserPage from "./Pages/userpage/UserPage"
function App() {
     const router = createBrowserRouter([
          {
               path:'/',
               element:<Layout />
          },
          {
               path:'/:id',
               element:<UserPage />
          }
     ])

  return <RouterProvider router={router}/>
}

export default App
