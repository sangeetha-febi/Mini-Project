import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from "./components/ProtectedRoutes";
import LibrarianDashboard from './pages/LibrarianDashboard';
import ErrorPage from './pages/ErrorPage';
import AddBooks from './pages/AddBooks';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addbooks" element={<AddBooks />} />
        

        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard/>
          </ProtectedRoutes>
        } />
        <Route path="/librariandashboard" element={
          <ProtectedRoutes>
            <LibrarianDashboard/>
          </ProtectedRoutes>
        } />
        
  <Route path="/error" element={
          <ProtectedRoutes>
            <ErrorPage/>
          </ProtectedRoutes>
        
        } />
        
      </Routes>

    </BrowserRouter>
  )
}

export default App