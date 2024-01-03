import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner.jsx";

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

function Random() {

  const [gif, setGif] = useState('');

  const [loading, setLoading ]= useState(false);
  useEffect(()=>{
    fetchData();

  },[]) 
  function clickHandler(){
    fetchData();
  }
  
  async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    
    
    const {data}= await axios.get(url);
    
    const imageSource = data.data.images.downsized_large.url;
  
    setGif(imageSource);
    setLoading(false);

  }


  return (
  
    <div className=" w-1/2  flex flex-col items-center justify-center bg-green-500 rounded-lg border border-black gap-y-2">
      <h1 className="font-bold text-center underline uppercase text-2xl">Random Gif
      </h1>
      {
        loading?(<Spinner></Spinner>):(<img src={gif} width="450" className="mb-4"/>)
      }
      <button className=" rounded-lg w-3/4 bg-green-200 h-10 mb-5" onClick={clickHandler}>Generate</button>
    </div>
  
  
    );
}

export default Random;

