import React, { useState } from 'react'

const DropDown=({
    children,
  data
})=>{
  const [isOpen, setIsOpen]=useState(true);
  return (
    <div className='relative w-fit' onClick={()=> setIsOpen(!isOpen)}>
      {children}
      <div className={isOpen ? "scale-0 hidden " : "scale-100 " +'w-full h-full fixed z-1 top-0 left-0 bg-transparent'} onClick={()=> setIsOpen(!isOpen)}></div>

      <div className={isOpen ? "scale-0 hidden" : "scale-100 " + ' transition-all z-2 absolute top-[115%] left-0 flex gap-1 bg-white p-3 flex-col w-full shadow-sm rounded-md'}>
        {data.map((ele, id)=>(
          <div key={id} onClick={()=>{console.log('called'); setIsOpen(!isOpen)}}>{ele}</div>
        ))}
      </div>
    </div>
  )
}
export default DropDown