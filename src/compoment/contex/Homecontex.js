import React, { createContext, useState } from 'react'
import Contexcon from './Contexcon'

 export const ThemeContext = createContext();

const Homecontex = () => {
    // 1 createContext
    // 2 Provider
    // 3 Consummer
    const [theme,settheme]=useState('dark')
    const [theme2,settheme2]=useState('dark2')
    const handtheme = ()=>{
        settheme( theme === 'dark' ? 'light':'dark')
    }
    const vlcontex = {
        theme,
        theme2
    }
    return (
        <ThemeContext.Provider value={vlcontex}>
        <div>
            <button onClick={handtheme}>taget</button>
            <Contexcon/>
        </div>
        </ThemeContext.Provider>
    )
}

export default Homecontex
