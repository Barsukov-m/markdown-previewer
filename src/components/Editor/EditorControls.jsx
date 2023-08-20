import Button from '../Button';

export default function EditorControls({ onCopy, onClear }) {
	return (
		<div className="EditorControls flex justify-end px-8 py-4">
			<Button onClick={onCopy}>Copy</Button>
			<Button onClick={onClear}>Clear</Button>
		</div>
	);
}
