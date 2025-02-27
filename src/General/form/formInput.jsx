import React from "react";
import { colors } from "../../constants/colors";


const FormInput = ({
	label,
	type,
	value,
	onChange,
	error,
	placeholder,
	icon,
	iconPosition,
	iconClick,
	accept,
	id,
	required,
	name,
	readOnly,
	bgColor,
	borderColor,
	borderWidth,
	color,
	inputRef,
	title,
	...rest
}) => {
	const isLeftIcon = iconPosition === "left";

	return (
		<div className='w-full'>
			{label && (
				<label
					style={{ color: (error && colors.red_pry) || color || colors.gray_4 }}
					className='mb-2 block'
				>
					{label}
				</label>
			)}

			<div className="relative"> 
				{icon && (
					<span
						onClick={iconClick}
						className={`absolute ${
							isLeftIcon ? "left-0" : "right-0"
						} px-3 bottom-0 flex items-center justify-center h-full cursor-pointer`}
					>
						{icon}
					</span>
				)}
				<input
					type={type}
					ref={inputRef}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					accept={accept}
					id={id}
					name={name}
					readOnly={readOnly}
					title={title}
					className={`block p-4 rounded-full w-full ${
							error
							? "border-red_pry"
							: "dark:border-borderDark"
						} dark:text-gray-800 text-gray-800 ${
							icon && "pl-8"
						}`}
						style={{
							backgroundColor: bgColor || "transparent",
							borderWidth: borderWidth || 1,
							borderColor: borderColor,
							color: (error && colors.red_pry) || color,
						}}
					{...rest}
				/>
			</div>
			{error && (
				<div className='mt-1' style={{ color: colors.red_pry }}>
					{error}
				</div>
			)}
		</div>
	);
};

export default FormInput;
