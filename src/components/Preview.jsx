import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function Preview({ markdown }) {
	function createMarkup() {
		marked.setOptions({
			breaks: true,
		});

		let rawMarkup = marked(markdown);
		let sanitizedHTML = DOMPurify.sanitize(rawMarkup);
		return { __html: sanitizedHTML };
	}

	return (
		<div className="Preview w-full">
			<div
				id="preview"
				className="markdown-preview px-8 py-20 h-full overflow-auto"
				dangerouslySetInnerHTML={createMarkup()}></div>
		</div>
	);
}
