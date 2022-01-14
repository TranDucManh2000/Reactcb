import React, { useState,useRef,useEffect } from 'react'
import Memoreact from './Memoreact';

const Usereff = () => {
    const [count,setcount]=useState(60)
    // const ref = useRef(8);
    // console.log(ref.current);
    const coutcu = useRef();
    useEffect(() => {
        // luan cham nen loi ra sau
      coutcu.current = count;
    }, [count])

    const timeid = useRef()
    const hanler = ()=>{
        timeid.current =  setInterval(() => {
            setcount(count =>count-1)
        }, 1000);
    }
    const hanstop = ()=>{
        clearInterval(timeid.current)
    }
    console.log(count,coutcu.current)
    return (
        <div>
            <Memoreact/>
            <h1>{count}</h1>
            <button onClick={hanler}>start</button>
            <button onClick={hanstop}>stop</button>
        </div>
    )
}

export default Usereff
