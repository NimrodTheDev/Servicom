import React from "react";
import { colors } from "../../constants/colors";


const FormSelect = ({
	label,
	options,
	value,
	error,
	placeholder,
	onSelect,
	name,
	className,
	bgColor,
	borderWidth,
	borderColor,
	color,
	required,
	icon,
	readOnly,
	...rest
}) => {
	return (
		<div className='text-sm'>
			{label && (
				<label style={{ color: color || colors.gray_3 }} className='mb-2 block'>
					{label}
				</label>
			)}
			<div className="relative">
				{icon && (
					<span
						className={`absolute left-0 px-3 bottom-0 flex items-center justify-center h-full cursor-pointer`}
					>
						{icon}
					</span>
				)}
				<select
					value={value}
					//@ts-ignore
					onChange={onSelect}
					name={name}
					disabled={readOnly}
					className={`block p-4 rounded-full w-full ${
						error
							? "border-red_pry"
							: "dark:border-borderDark"
					} dark:text-gray_3 text-gray-800 ${className} text-gray-800 ${
						icon && "pl-8"
					}`}
					style={{
						backgroundColor: bgColor || "transparent",
						borderWidth: borderWidth || 1,
						borderColor: borderColor,
						color: (error && colors.red_pry) || color,
					}}
					{...rest}
				>
					{placeholder && <option value=''>{placeholder}</option>}
					{options?.map((option, ind) => (
						<option key={ind} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
			{error && <div style={{ color: colors.red_pry }}>{error}</div>}
		</div>
	);
};

export default FormSelect;
