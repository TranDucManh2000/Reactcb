import React, { useState } from "react";

const Usememoo = () => {
  const [name, setname] = useState('');
  const [vlua, setvlua] = useState('');
  const [lis, setlis] = useState([]);
  const submit = () => {
    setlis([
      ...lis,
      {
        name,
        vlua:Number(vlua)
      },
    ])
  }
  console.log(lis)
  const total = lis.reduce((kq,gtsp)=>{
      console.log('tinh lai');
    return kq + gtsp.vlua
  },0)
  return (
    <div>
      name
      <input onChange={(e) => setname(e.target.value)}></input>
      vlua
      <input value={vlua} onChange={(e) => setvlua(e.target.value)}></input>
      <button onClick={submit}>submit</button>
      <h1>Toto {total}</h1>
      <ul>
      {lis.map((vla,ind)=>(
            <li key={ind}>{vla.name}-{vla.vlua}</li>   
      ))}
      </ul>
    </div>
  );
};

export default Usememoo;
