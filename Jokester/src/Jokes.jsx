import React from "react";
import { useState,useEffect } from "react";
import './Jokes.css';


export default function Jokes(){
    let [joke, setJoke]=useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke"
    const getNewJoke = async()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({ setup: jsonResponse.setup, punchline:jsonResponse.punchline });
    };

    useEffect(()=>{
        async function getFirstJoke(){
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    
        }
        getFirstJoke();
    },[]);
    return(
        <div className="div1">
        <h1>Jokes!!</h1>
        <h3>{joke.setup}</h3>
        <h3>{joke.punchline}</h3>

        <button className="btn" onClick={getNewJoke}>Crack new Joke!!</button>
        </div>
    )
}