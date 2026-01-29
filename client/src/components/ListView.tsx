"use client"
import {useEffect, useState} from "react"
import {customUrgency} from "./getUrgency"
import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react"
import {feedback} from "@/interface/feedback.interface"
export default function ListView(){
  let [data, setData] = useState<feedback[]>([])
  useEffect(() => {
   getData()
  },[])
  const getData = async () => {
   const urgency = await customUrgency()
   console.log("urgency", urgency)
   setData(urgency)
  }
  return(
   <div>
     <Table>
       <TableHead>
         <TableRow>
           <TableHeadCell className="border-amber-50">Id</TableHeadCell>
           <TableHeadCell>Category</TableHeadCell>
           <TableHeadCell>Draft</TableHeadCell>
           <TableHeadCell>Priority</TableHeadCell>
         </TableRow>
      </TableHead>
      <TableBody>
        {data.length > 0 && data.map((i) => {
          return(
           <TableRow key={i.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
             <TableCell className="font-medium text-blue-500 dark:text-white border-2">
               {i.id}
             </TableCell>
             <TableCell className="whitespace-nowrap font-medium text-green-500 dark:text-white border-2">
               {i.category}
             </TableCell>
             <TableCell className="whitespace-nowrap font-medium text-purple-500 dark:text-white border-2">
               {i.draft}
             </TableCell>
             <TableCell className="whitespace-nowrap font-medium text-violet-500 dark:text-white border-2">
               {i.priority === "high" ? <span style={{color:"red"}}>{i.priority}</span> : <span>{i.priority}</span>}
             </TableCell>
           </TableRow>  
          )
        })
        } 
      </TableBody>
     </Table> 
   </div>
  )  
}