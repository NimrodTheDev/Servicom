import React, { useEffect, useState } from "react";
//@ts-ignore
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { colors } from "../../constants/colors";


const RichTextEditor = ({label}) => {
	const [value, setValue] = useState("");
	const { quill, quillRef } = useQuill();

	React.useEffect(() => {
		if (quill) {
			quill.on("text-change", () => {
				console.log("Text change!");
				console.log(quill.getText()); // Get text only
				console.log(quill.getContents()); // Get delta contents
				console.log(quill.root.innerHTML); // Get innerHTML using quill
				console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
			});
		}
	}, [quill]);
	return (
		<div className="w-full flex flex-col h-[400px] rounded-lg">
			<label style={{ color: colors.gray_4 }} className='mb-2 block'>
				{label}
			</label>
			<div ref={quillRef} className="h-[400px] text-gray-800 border" />
		</div>
	);
};

export default RichTextEditor;
