import React, { useState,useEffect } from 'react'

const Textrun = ({runtext}) => {
    const [text,settext] = useState('')
    const [ok,setok]= useState();
    // useEffect(() => {
    //     setInterval(() => {
    //         setok(Math.random)
    //     }, 5000);
    // }, [])
    // console.log('ok',ok)
    useEffect(() => {
        setTimeout(()=>{
            if(runtext.length){
                if(runtext.split("")[text.length]){
                    settext(text+runtext.split("")[text.length])
                }
            }else{
                settext(text+runtext.split("")[0])
            }
        },20)
    }, [text])

    const rendert = text.split("").map((el,ix)=>{
        return <span key={ix}>{el}</span>
    })
     return (
        <div>
          <h1>{rendert}</h1>
        </div>
    )
}

export default Textrun
