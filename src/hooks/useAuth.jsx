import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check for token in localStorage or cookies
    const token = localStorage.getItem('authToken')
    console.log("🚀 ~ useEffect ~ token:", token) 
    setIsAuthenticated(token)
    
    if (!token) {
      navigate('/auth/login')
    }
  }, [navigate])
  
  console.log('is Authenticated', isAuthenticated)

  const login = (email, password) => {    
    localStorage.setItem('authToken', true)
    setIsAuthenticated(true)
    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
    navigate('/auth/login')
  }

  return { isAuthenticated, login, logout }
}