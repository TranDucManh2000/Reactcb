import React, { useState,useCallback } from 'react'
import Conten from './Conten';

const UseCallBackk = () => {
    // useCallback hay di vs memo moi dc 
    const [count,setcount] = useState(0);

    const handclick = useCallback(()=>{
            setcount(count => count+1);
        },[]) 

    return (
        <div>
            <Conten handclick={handclick} />
            <h1>{count}</h1>
        </div>
    )
}

export default UseCallBackk
