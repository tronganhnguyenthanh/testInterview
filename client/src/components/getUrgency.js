"use client"
import axios from "axios"
export async function customUrgency(){
 const res = await axios.get("http://localhost:8081/api/v1/feedback/list")
 const urgency = await res.data.data
 return urgency
}