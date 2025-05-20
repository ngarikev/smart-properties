import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('authToken')

    // Update auth state based on token
    if (token) {
      setIsAuthenticated(true)

      // Redirect to dashboard if logged in and trying to access login
      if (location.pathname === '/auth/login') {
        navigate('/', { replace: true })
      }
    } else {
      setIsAuthenticated(false)

      // Redirect to login only if trying to access a protected route
      const isOnAuthPage = location.pathname.startsWith('/auth')
      if (!isOnAuthPage) {
        navigate('/auth/login', { replace: true })
      }
    }
  }, [navigate, location.pathname])

  const login = (email, password) => {
    // Normally you'd verify credentials here (e.g., via API)
    localStorage.setItem('authToken', 'your-token-value')
    setIsAuthenticated(true)
    navigate('/', { replace: true })
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
    navigate('/auth/login', { replace: true })
  }

  return { isAuthenticated, login, logout }
}
