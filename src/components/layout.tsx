import React from 'react';
import { Navbar } from './navbar/navbar';

interface Props {
	children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className="container-layout">
			<Navbar />
			{children}
		</div>
	);
};
