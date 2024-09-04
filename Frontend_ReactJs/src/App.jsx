import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SearchGenreProvider } from './context/SearchContext'
import { BookstoreNavbar } from './components/BookstoreNavbar'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Genres } from './components/Genres'
import { ContactUs } from './components/ContactUs'
import { PrivateRoute } from './components/PrivateRouteLogin'
import { Dashboard } from './components/Dashboard'
import './App.css'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><BookstoreNavbar /><Home /></>
    },
    {
      path: "/login",
      element: <><BookstoreNavbar /><Login /></>
    },
    {
      path: "/contact",
      element: <><BookstoreNavbar /><ContactUs /></>
    },
    {
      path: "/genres",
      element: <><BookstoreNavbar /><Genres /></>
    },
    {
      path: "/register",
      element: <><BookstoreNavbar /><Register /></>
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><BookstoreNavbar /><Dashboard /></PrivateRoute>
    }
  ])

  return (
    <>
      <SearchGenreProvider>
        <RouterProvider router={router} />
      </SearchGenreProvider>
    </>
  )
}

export default App;
