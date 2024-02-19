import React, { useEffect, useState } from "react";

export default function Effect(){
    let [count, setCount]=useState(0);
    let [count2, setCount2]=useState(0);
    let incre = ()=>{
        setCount((counter)=>
            counter +1);
    }
    let incre2 = ()=>{
        setCount2((counter)=>
            counter +1);
    }
    useEffect((effect)=>{
        console.log("use effect working");
    },[count2])
    return (
        <>
        <h1>count={count}</h1>
        <button onClick={incre}>+1</button>
        <h1>count2={count2}</h1>
        <button onClick={incre2}>+1</button>
        </>
    )
}