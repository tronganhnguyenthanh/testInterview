"use client"
import {TextInput} from "flowbite-react";
import {useState} from "react";
export default function DetailView(){
  const [draft, setDraft] = useState("")
  return(
   <div className="flex justify-center">
    <TextInput 
      className="w-96"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
    />
    <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
      Resolve
    </button>
   </div>
  )  
}