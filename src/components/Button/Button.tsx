import React from 'react';

export type Props = {
	className?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset' | undefined;
	children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({ className = 'btn-primary', onClick, type, children }) => {
	return (
		<button className={`btn ${className}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};
