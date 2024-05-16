import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//import './index.css'
import Createaccount from './page/createaccount.jsx'
import Edit from './page/edit2.jsx'
import Login from './page/login.jsx'
import Uplode from './page/uplodepage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/createaccount',
    element: <Createaccount />
  },
  {
    path: '/uplode',
    element: <Uplode />
  },
  {
    path: '/edit',
    element: <Edit/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
