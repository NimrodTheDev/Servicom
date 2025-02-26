import { FC } from "react";

interface TanHeaderProps {
	table: any;
}

const TanHeader: FC<TanHeaderProps> = ({ table }) => {
	return (
		<thead className='border'>
			{table.getHeaderGroups().map((headerGroup: any) => (
				<tr className='' key={headerGroup.id}>
					{headerGroup.headers.map((header: any, index: number) => (
						<th
							className='text-left dark:text-white border text-black whitespace-nowrap bg-gray-100'
							key={index}
							onClick={header.column.getToggleSortingHandler()}
						>
							<div className='dark:bg-darkBg bg-transparent p-3 mx-2 rounded-md text-gray-800'>
								{header.column.columnDef.header}
							</div>
						</th>
					))}
				</tr>
			))}
		</thead>
	);
};

export default TanHeader;
