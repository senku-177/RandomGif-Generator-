import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

export default function Tag() {
 
  const [gif,setGif]= useState('');

  const[tag, setTag]= useState('tom');
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    fetchData();
  },[]);

  function changeHandler(event){
    setTag(event.value);

  }
  function clickHandler(){
    fetchData();
  }
  
  async function fetchData(){
    setLoading(true);
    const url= `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${tag}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const {data}= await axios.get(url);
    console.log(data);
    const {Array_gif}=data.data;
    const imageSource = data.data[Math.floor(Math.random()*data.data.length)].images.fixed_width_downsampled.url;
    console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  return (

    <div className="items-center rounded-lg bg-blue-400 w-1/2 flex flex-col justify-center border border-black gap-y-2 ">
      <h1 className="font-bold uppercase underline text-center text-2xl">  Tag</h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="450" className="mb-4"></img>)
      }
      <input type="text" value = {tag}placeholder="Enter the category" name="tag" className="rounded-lg w-1/2 justify-center px-2 py-1 items-center mt-2 mb-2" onChange={changeHandler}></input>
      <button onClick={clickHandler} className="w-3/4 bg-blue-100 rounded-lg mb-2 h-10">Generate</button>

    </div>
  );
}
