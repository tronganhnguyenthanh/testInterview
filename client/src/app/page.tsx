"use client"
import DetailView from "@/components/DetailView";
import {customUrgency} from "@/components/getUrgency";
import ListView from "@/components/ListView";
import {feedback} from "@/interface/feedback.interface";
import {TabItem, Tabs} from "flowbite-react";
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
    <div className="items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2 m-2">
      <Tabs variant="pills">
        <TabItem active title="List view">
          <ListView/>
        </TabItem>
        <TabItem title="Detail view">
          <DetailView/>
        </TabItem>
      </Tabs>
    </div>
   </>
  )
}
