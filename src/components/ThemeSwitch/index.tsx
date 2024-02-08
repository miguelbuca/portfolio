'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

const useThemeSwitchState = () => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])
  const toggle = useCallback(() => {
    if (localStorage.theme) {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    }
    setIsDark(prev => !prev)
  }, [])
  return { toggle, isDark }
}

const ThemeSwitch = () => {
  const { isDark, toggle } = useThemeSwitchState()
  return (
    <div className='flex items-center bg-white dark:bg-white/[0.06] justify-center border border-black/[0.06] dark:border-white/[0.06] rounded-full *:cursor-pointer h-10 w-10' onClick={toggle}>
      {isDark ? <FaRegSun size={15}  /> : <FaRegMoon size={15} />}
    </div>
  )
}

export default ThemeSwitch;