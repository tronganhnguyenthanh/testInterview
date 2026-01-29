"use client"
import DetailView from "@/components/DetailView";
import {customUrgency} from "@/components/getUrgency";
import ListView from "@/components/ListView";
import {feedback} from "@/interface/feedback.interface";
import { TabItem, Tabs } from "flowbite-react";
import {useEffect, useState} from "react";
export default function Home(){
  let [listUrgency, setListUrgency] = useState<feedback[]>([])
  useEffect(() => {
   showListUrgency()  
  },[])
  const showListUrgency = async () => {
   const urgency = await customUrgency()
   listUrgency = urgency
   setListUrgency(listUrgency)
  }
  return (
   <> 
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2 m-2">
      {/* <ListView/>
      <DetailView/> */}
      <Tabs variant="default">
        <TabItem active title="List view">
          <ListView/>
        </TabItem>
        <TabItem title="Detail view">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </TabItem>
      </Tabs>
    </div>
   </>
  )
}
