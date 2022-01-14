import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Homecontex'

const Contextchau = () => {
    const listheme= useContext(ThemeContext);
    return (
        <div>
            <h1>theme : {listheme.theme}</h1>
            <h1>theme2 : {listheme.theme2}</h1>
        </div>
    )
}

export default Contextchau
