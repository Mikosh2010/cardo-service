import { FC, ReactNode } from 'react'

export const Button: FC<{ buttonClass?: string; children: ReactNode; onClick?: () => void; }> = ({ buttonClass, children, onClick }) => {
	return (
		<button onClick={onClick} className={`bg-white/15 hover:shadow-lg px-3.5 py-1.5 rounded-md text-base/normal hover:bg-white hover:text-black ease-in-out duration-500 ${buttonClass}`}>{children}</button>
	);
};