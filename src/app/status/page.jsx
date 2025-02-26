"use client"

import TanTable from "@/General/TanTable"
import { Popover } from "@material-tailwind/react";
import Link from "next/link";

const Page=()=>{
    const columns = [
        {
          accessorKey: "id",
          header: "Tracking ID",
          cell:({row})=> `#${row.original.id}`
        },
        {
          accessorKey: "category",
          header: "Category",
        },
        {
          accessorKey: "status",
          header: "Status",
        },
        {
          id: "options",
          header: "",
          cell: ({row}) => {
          return(
            <Link href={"status/" + row.original.id} className="text-blue-500">View</Link>
          )},
        },
      ];
      const data = [
        { id: "1234", category: "Electronics", status: "Pending"},
        { id: "2667", category: "Furniture", status: "Approved" },
        { id: "3877", category: "Clothing", status: "Rejected" },
        { id: "1987", category: "Electronics", status: "Pending" },
        { id: "2655", category: "Furniture", status: "Approved" },
        { id: "3987", category: "Clothing", status: "Rejected" },
        { id: "1765", category: "Electronics", status: "Pending" },
        { id: "2987", category: "Furniture", status: "Approved" },
        { id: "3099", category: "Clothing", status: "Rejected" },
        { id: "1345", category: "Electronics", status: "Pending" },
        { id: "2097", category: "Furniture", status: "Approved" },
        { id: "3097", category: "Clothing", status: "Rejected" },
      ];
      
    return(
        <div className="mt-[15vh] mx-auto max-w-2xl">
            <TanTable columnData={columns} data={data} showSearch hidePaging={false} length={10}/>
        </div>
    )
} 

export default Page