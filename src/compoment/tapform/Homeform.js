import React, { useState } from 'react'

const Homeform = () => {
    const data = [
        {
            id : "d",
            name : "c",
            age : "j",
        },
        {
            id : "d",
            name : "c",
            age : "j",
        }, 
    ];
    const [vlua,setvlu] = useState(data);
    const add = ()=>{
        setvlu(vlua.concat([{id:4,name:"c",age:"c"}]))
    } 
    console.log(vlua);
    return (
        <div>
            {
                vlua&&vlua.map((vl,index)=>(
                    <h1 key={index}>{vl.id}</h1>
                ))
            }
            <button onClick={add}>add</button>
        </div>
    )
}

export default Homeform
