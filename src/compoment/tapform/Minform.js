import React, { useState, useEffect } from "react";
import axiosConfig from "../config/axiosConfig";
import axios from "axios";
const Minform = () => {
  const [vl, setvl] = useState([]);
  const [vlasy, setvlasy] = useState([]);

  useEffect(() => {
    axiosConfig.get("danhmuc").then(function (e) {
      const { data } = e;
      setvl(data);
    });
  }, []);
  console.log("data promi", vl);

  return (
    <div>
      {vl.map((v, ix) => (
        <h1 key={ix}>{v.name}</h1>
      ))}
    </div>
  );
};

export default Minform;
