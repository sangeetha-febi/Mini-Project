import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({ children }) {
  const user = useSelector(loggedUser => loggedUser.user);
  return user ? children : <Navigate to="/login" />
  const Role =useSelector(loggedRole=>loggedRole.Role);
    return user ? children : <Navigate to="/login" />

}

export default ProtectedRoutes