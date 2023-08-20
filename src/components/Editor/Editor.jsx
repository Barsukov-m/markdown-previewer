import { useRef } from 'react';
import EditorControls from './EditorControls';

export default function Editor({ markdown, onChange }) {
	const textRef = useRef(null);

	const handleCopy = () => {
		if (textRef.current) {
			navigator.clipboard.writeText(textRef.current.value);
		}
	};

	const handleClear = () => {
		if (textRef.current) {
			textRef.current.value = '';
		}
		onChange(null);
	};

	return (
		<div className="Editor w-full">
			<EditorControls onCopy={handleCopy} onClear={handleClear} />
			<textarea
				ref={textRef}
				value={markdown}
				onChange={onChange}
				id="editor"
				className="markdown-input w-full h-screen p-8 rounded focus:rounded-none border-2 border-slate-400 focus:outline-black"
			/>
		</div>
	);
}
