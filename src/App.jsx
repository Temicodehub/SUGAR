import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/'
import { About, Contact, Home, Resume, Service} from './pages';
import Homelayout from './pages/Homelayout';

const router = createBrowserRouter([
  {
   path:"/",
   element:"/",
   children:"/",
   
}]);



function App() {
  return <RouterProvider router={router} />;
  
  }

export default App
