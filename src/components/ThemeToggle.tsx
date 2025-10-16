import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, isDark } = useTheme()

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const getIcon = () => {
    if (theme === 'light') return '☀️'
    if (theme === 'dark') return '🌙'
    return '☀️'
  }

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Current: ${theme === 'light' ? 'Light' : 'Dark'}`}
    >
      {getIcon()}
    </button>
  )
}

export default ThemeToggle
