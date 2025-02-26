import React from 'react'
import FormInput from './formInput'
import { Popover, Typography } from '@material-tailwind/react'
import { Download } from 'lucide-react'
import { colors } from '@/constants/colors'

interface FileProps extends iInputField {
    fileType?: "Img" | "pdf";
    id?: string;
}

const File = ({
	label,
	type,
	value,
	onChange,
	error,
	placeholder,
	icon,
	iconPosition,
	iconClick,
	required,
	name,
	readOnly,
	bgColor,
    fileType="pdf",
    id,
	borderColor,
	borderWidth,
	color,
	inputRef,
	title,
	...rest
}:  FileProps) => {
    const [file, setFile] = React.useState<File | undefined>(undefined)
    const [show, setShow] = React.useState(false);
    return (
    <div className='flex flex-col gap-2'>
        {label && (
        <label
            style={{ color: (error && colors.red_pry) || color || colors.gray_4 }}
            className='mb-2 block'
        >
            {label}
            {required && <span>*</span>}
        </label>
        )}
        <div className='rounded-full border border-gray-300 p-4'>
            <div className='flex items-center gap-2'>
                {
                    file && (
                        <>
                            {fileType === "Img" && <img src={URL.createObjectURL(file)} alt={file.name} className='w-10 h-10 rounded-full' />}
                            <Typography className='text-[14px] text-gray_3'>{file.name}</Typography>
                            {fileType === "pdf" && <div className='text-blue-600 underline ml-auto cursor-pointer' onClick={()=> setShow(true)}>View</div>}
                        </>
                    )
                }
                <label htmlFor={id} className={file ? fileType === "Img" ? "ml-auto" : " ":'ml-auto'} ><Download size={14} color='#555' className='cursor-pointer' /></label>
            </div>
            <FormInput accept={fileType === "Img" ? "image/*" : ".pdf,.doc,.docx,.txt,.rtf,.odt"} type={'file'}   id={id} className='hidden' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.currentTarget.files?.[0]
                setFile(file)
            }} />
        </div>
        {
            show && <>
                {file && <iframe color='#000' className='z-10 flex items-stretch absolute top-[50%] left-[50%] w-full max-w-[800px] p-2 bg-[gray] translate-x-[-50%] h-full max-h-[600px] translate-y-[-50%]' src={URL.createObjectURL(file)}></iframe>}
                <div  className='fixed top-0 left-0 w-full h-full z-5 bg-[gray] bg-opacity-50 flex items-center justify-center' onClick={()=> setShow(false)}>
                </div>
            </>
        }
    </div>
  )
  
}

export default File