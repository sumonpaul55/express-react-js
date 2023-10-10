import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from '../Root.jsx';
import Home from './components/home/Home.jsx';
import Users from './components/user/User';
import SingleUser from './components/user/singleUser/SingleUser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/user",
        loader: () => fetch("http://localhost:5000/user"),
        element: <Users></Users>
      }
      ,
      {
        path: "/user/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
        element: <SingleUser></SingleUser>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
