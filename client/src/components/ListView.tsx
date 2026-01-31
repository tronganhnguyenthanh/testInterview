"use client"
import {useEffect, useState} from "react"
import {customUrgency} from "./getUrgency"
import {Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react"
import {feedback} from "@/interface/feedback.interface"
import {useRouter} from "next/navigation"
export default function ListView() {
  let [data, setData] = useState<feedback[]>([])
  const [toggleTable, setToggleTable] = useState(false)
  const router = useRouter()
  useEffect(() => {
   getData()
  },[])
  const getData = async () => {
   const urgency = await customUrgency()
   setData(urgency)
   setToggleTable(!toggleTable)
  }
  const getAIDraftById = async (id:number) => {
   router.push(`/details/${id}`)
  }
  return (
    <div>
     <Button onClick={getData}>List view</Button>
     {toggleTable ?
       <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell className="border-amber-50">Id</TableHeadCell>
            <TableHeadCell className="text-center">Category</TableHeadCell>
            <TableHeadCell className="text-center">Score</TableHeadCell>
            <TableHeadCell className="text-center">Draft</TableHeadCell>
            <TableHeadCell>Priority</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 && data.map((i) => {
            return (
              <TableRow key={i.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="font-medium text-blue-500 dark:text-white border-2">
                  {i.id}
                </TableCell>
                <TableCell className="whitespace-nowrap font-medium text-green-500 dark:text-white border-2">
                  {i.category}
                </TableCell>
                <TableCell className="whitespace-nowrap font-medium text-indigo-900 border-r-0 dark:text-white border-2 text-center">
                  {i.score}
                </TableCell>
                <TableCell className="whitespace-nowrap font-medium text-purple-500 dark:text-white border-2 text-center">
                  {i.draft}
                </TableCell>
                <TableCell className="whitespace-nowrap font-medium text-orange-700 dark:text-white border-3 capitalize text-center">
                  {
                    i.priority === "high" ? (
                      <span className="text-green-500 font-medium capitalize">
                        {i.priority}
                      </span>
                    ):i.priority === "medium" ? (
                     <span className="text-yellow-500 font-medium capitalize">
                       {i.priority}
                     </span>
                    ):(
                     <span className="text-red-500 font-medium capitalize">
                       {i.priority}
                     </span>
                    )
                  }
                </TableCell>
                <TableCell className="whitespace-nowrap font-medium text-indigo-900 border-r-0 dark:text-white border-2 text-center">
                  <Button
                    color="alternative" 
                    onClick={() => getAIDraftById(i.id)}
                   >
                    Detail view
                  </Button>
                </TableCell>
              </TableRow>
            )
           })
          }
        </TableBody>
      </Table> 
      :
      ""
      }
    </div>
  )
}