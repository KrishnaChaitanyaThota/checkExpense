
import Head from "next/head"
import {useState } from "react";

export default function Home() {

  const [show, setshow] = useState(false);

  return (
    <>
      <div>
        <Head>
          <title>CheckExpenses</title>
          <meta name="description" content="Organize your daily expenses and have a clear track of it..." />
        </Head>
      </div>

      <div className="bg-teal-400">
        <p className="text-white mx-64 font-bold text-xl">Daily Expenses</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="border-2 h-screen w-2/4">
          <div className="bg-gray-200 p-2">
            <button className="bg-orange-500 rounded text-white p-2 " onClick={()=>setshow(true)}>Add an expense</button></div>
        </div>

        {show ?<div className="absolute top-12 w-auto bg-teal-400 border border-slate-950">
          
          <h1 className="text-gray-800 underline font-bold p-1">Add an expense  <span onClick={()=>setshow(false)} className="absolute top-0 right-2 cursor-pointer">X</span></h1>
          <div className="flex flex-col">
          <input type="text" className="outline-none border-4 border-b-indigo-500 m-2" placeholder="Enter amount spent" />
          <input type="text" className="outline-none border-4 border-b-indigo-500 m-2" placeholder="Enter description" />
          <input className="outline-none border-4 border-b-indigo-500 m-2" type="file" />
          <input className="outline-none border-4 border-b-indigo-500 m-2" type="date" />
          <button onClick={()=>setshow(false)} type="submit" className="outline-none border-4 border-b-indigo-500">Submit</button>
          </div>
        
      </div>:null}
      </div>
    </>
  )
}
