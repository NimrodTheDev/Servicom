"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import RichTextEditor from '@/General/form/richTextInput';
import { FormInput, FormSelect } from '@/General/form';
import { Typography } from '@material-tailwind/react';


export default function Complaints() {
  const [complaint, setComplaint] = useState('');
  const [show, setShow] = useState(false);
  return (
      <main className="mt-8 max-w-3xl mx-auto bg-white p-6 flex flex-col gap-2 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Submit a Complaint</h2>
        <p className="text-gray-600 text-center mt-2">Describe the issue in detail so we can help resolve it efficiently.</p>
        <form className="mt-6 flex flex-col gap-2 items-stretch" onSubmit={(e)=>{
            e.preventDefault()
            setShow((pre)=>!pre)
        }}>
            <FormInput label='Name'  />
            <FormInput label='Email' />
            <FormSelect label='Complaint Category' placeholder='Select a category'  options={["Service Delay", "Corruption", "Poor Infrastructure", "Other"]}/>
            <RichTextEditor label='Complaint Details' />

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-6 hover:bg-blue-600">
            Submit Complaint
          </button>
        </form>
        <div className={'flex items-center justify-center fixed bg-[#0005] w-full h-full top-0 left-0 ' + (show ? "scale-1" : " scale-0 hidden") } onClick={()=> setShow(false)} >
            <div className='bg-white p-5 flex flex-col gap-2' onClick={(e)=> e.stopPropagation()}>
                <Typography className="font-semibold text-gray-800">
                    Complaint submitted successfully
                </Typography>
                <Typography className="text-gray-800">
                    Your tracking id is:  #11133
                </Typography>
                <div className='flex justify-between'>
                    <Link href={"status/2"} className='text-[blue] w-fit'>view status</Link>
                    <div onClick={()=> {
                        let value = localStorage.getItem("saved");
                        if (value) {
                            let array = JSON.parse(value);
                            array.push("#3456")
                            localStorage.setItem("saved", JSON.stringify(array))
                        }else{
                            localStorage.setItem("saved", JSON.stringify(["#12345"]))
                        }
                        setShow(false)
                        }}>Save</div>
                </div>
            </div>
        </div>
      </main>
  );
}
