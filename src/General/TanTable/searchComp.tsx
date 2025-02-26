import React, { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import DropDown from "../dropDown";
import { Button, Popover, Typography } from "@material-tailwind/react";
import { FilterIcon } from "@/asset/svgs";
import { FormInput } from "../form";
import Link from "next/link";

interface SearchCompProps {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	setPageIndex?: React.Dispatch<React.SetStateAction<number>>;
	filterList?: string[];
	handleFilterChange?: (selectedFilter: string) => void;
	hideFilter?: boolean;
}

const SearchComp: React.FC<SearchCompProps> = ({
	searchTerm,
	setSearchTerm,
	setPageIndex,
	filterList,
	handleFilterChange,
	hideFilter,
}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setPageIndex && setPageIndex(1);
	};
	const [isOpen, setIsOpen]=useState(false)
	const localValue = localStorage.getItem("saved")
	let parsedValue: any[] | null = localValue ? JSON.parse(localValue) : null

	return (
		<>
		<div className='flex gap-3 my-3 relative w-full justify-between items-center mb-5'>
			<div className="w-full">
				<FormInput onChange={handleInputChange} placeholder="Search" />
			</div>
			{!hideFilter && (
				<>
					<Button className="p-3 bg-transparent flex gap-2 items-center rounded-md border shadow-none" onClick={()=> setIsOpen((pre)=> !pre)}>
						
						<Typography className="text-[14px] text-[#333] font-[600]">
							Saved
						</Typography>
					</Button>
					<div className={"fixed flex left-0 top-0 items-stretch w-full h-full justify-end p-4 transition-all z-30" + (isOpen ? " scale-1" : " scale-0 hidden")} onClick={()=>setIsOpen((pre)=>!pre)}>
						<div className="p-4 max-w-[400px] w-full h-full bg-white rounded-md" onClick={(e)=> e.stopPropagation()}>
							<div className="flex justify-between items-center">
								<Typography className="text-[20px] font-[500] text-gray-800">Saved</Typography>
								<div  onClick={()=>setIsOpen((pre)=>!pre)}>
									<X/>
								</div>
							</div>
							<div className="flex flex-col p-4 gap-2 text-gray-800">
								{
									parsedValue && (parsedValue?.length > 0) ? parsedValue?.map((ele)=>{
										return(
											<Link href={"status/" + ele}>View #{ele}</Link>
										)
									}) : 'No data yet'
								}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
		</>
	);
};

export default SearchComp;
