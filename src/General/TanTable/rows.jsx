import { flexRender } from "@tanstack/react-table";
import { FC, MouseEvent } from "react";



const TanRows= ({ table, onClick }) => {
	return (
		<tbody>
			{table.getRowModel().rows.map((row, index) => (
				<tr
					className={`${index % 2 !== 0 ? "" : ""} `}
					key={index}
					onClick={onClick ? onClick : undefined}
				>
					{row.getVisibleCells().map((cell, index) => (
						<td
							className='border'
							key={index}
							//@ts-ignore
							w={cell.column.getSize()}
						>
							<div className='truncate-text whitespace-nowrap dark:border-[#FFFFFF0A] border-[1px] border-transparent p-3 m-2 rounded-md'>
								{flexRender(cell.column.columnDef.cell, cell.getContext())}
							</div>
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default TanRows;
