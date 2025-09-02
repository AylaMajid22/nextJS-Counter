 'use client'
 
 import { useState } from "react";
 
 export default function Page(){
       const [counter , setCounter] = useState(5);  
 
    
    
     function valueIncrease(){
        if (counter < 25){
        setCounter (counter + 1);
        console.log("value added successfully" , counter + 1)  
    } 
     }
 
      function valueDecrease(){
        if (counter > 0){
            setCounter (counter - 1)
            console.log("Value decrease successfully" , counter - 1);
        }
     }
 
     return(
     <>
     <div className="text-center items-center justify-center border  max-w-md m-auto mt-32 p-7 rounded-3xl drop-shadow-2xl shadow-2xl">
         <h1 className="text-4xl">Counter</h1>
         <h2 className="text-3xl mt-3 mb-4" >Counter Value: {counter}</h2>
         <button disabled = {counter >= 25} onClick={valueIncrease} 
          className="disabled:opacity-50 disabled:border-black disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:p-2 border-2 hover:bg-green-500 hover:px-3 duration-500 p-2 rounded-xl cursor-pointer hover:border-green-800">Add Value </button>
         <br />
         <button disabled = {counter <= 0} onClick={valueDecrease} 
          className="disabled:opacity-50 disabled:border-black disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:p-2 border-2 hover:bg-red-500 hover:px-3 duration-500 p-2 rounded-xl cursor-pointer mt-2 hover:border-red-800">Decrease Value </button>
     </div>
     </>
     )
    }