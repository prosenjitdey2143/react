import React, { useEffect,useState } from 'react'
import { ThemeProvider } from '../../context/theme';
import Themebtn from './Themebtn';
import Card from './Card';

const Index = () => {
  const [themeMood,setThemeMood]=useState('light')
  const lightTheme=()=>{
    setThemeMood("light")
  }
  const darkTheme=()=>{
    setThemeMood("dark")
  }
  useEffect(()=>{
    const html=document.querySelector('html')
    html.classList.remove("light","dark")
    html.classList.add(themeMood)
  },[themeMood])
  return (
    <ThemeProvider value={{themeMood,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Index
