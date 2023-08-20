export default function Button({ children, background, ...rest }) {
	return (
		<button
			className="Button px-4 py-1 mr-2 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-300 rounded"
			style={background && { background: background }}
			{...rest}>
			{children}
		</button>
	);
}
