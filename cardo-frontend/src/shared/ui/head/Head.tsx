import { CSSProperties, FC } from 'react'

interface HeadProps {
	title: string;
	text: string;
	titleClass?: string;
	textClass?: string;
	headClass?: string;
	headStyle?: CSSProperties;
}

export const Head: FC<HeadProps> = ({ title, text, titleClass, textClass, headClass, headStyle }) => {
	return (
		<div className={`grid gap-y-3 justify-center text-center ${headClass}`} style={headStyle}>
			<h2 className={`text-5xl text-white font-semibold tracking-tighter drop-shadow-xl ${titleClass}`}>{title}</h2>
			<p className={`text-2xl text-white/70 tracking-tight drop-shadow-xl ${textClass}`}>{text}</p>
		</div>
	);
};