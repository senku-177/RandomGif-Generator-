import Random from "./components/Random";
import Tag from "./components/Tag";

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;



export default function App() {



  return (
    
    <div className="w-full  flex flex-col background overflow-x-hidden items-center justify-center">

      
      
      <h1 className=" bg-white w-11/12 text-center text-4xl px-10 py-2 font-bold mt-[40px] ml-[15px] mr-[15px] mx-auto rounded-lg mb-[25px]">Random GIF</h1>
      <div className="  w-full items-center flex-col flex gap-y-10 rounded-lg ">
      <Random></Random>
      <Tag></Tag>
      </div>
      </div>
  
  
  
  
  );
}
