"use client"
import axios from "axios";
import {TextInput} from "flowbite-react";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
export default function DetailView(){
  const [draft, setDraft] = useState("")
  const router = useRouter()
  const {id} = useParams()
  useEffect(() => {
   getDetailById()
  },[id])
  const getDetailById = async () => {
   const res = await axios.get(`http://localhost:8081/api/v1/feedback/detail/${Number(id)}`)
   setDraft(res.data.draft)  
  }
  const updateDraft = async () => {
   if(draft === ""){
    toast.error("Please enter your ai draft", {position:"top-center"})
   }else{
    const res = await axios.patch(`http://localhost:8081/api/v1/feedback/edit/${Number(id)}`, {draft})
    toast.success(res.data.data, {position:"top-center"})
    setTimeout(() => {
     router.push("/")
    },1000)
   } 
  }
  return(
   <div className="flex justify-center m-2 py-64">
    <ToastContainer/>
    <TextInput 
      className="w-96"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
    />
    <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={updateDraft}>
      Resolve
    </button>
   </div>
  )  
}