import React from 'react';
import Head from '../components/home/head';
import { Layout } from '../components/layout';

interface Props {}

export const Home: React.FC<Props> = () => {
	return (
		<div className="container-home">
			<Layout>
				<Head />
			</Layout>
		</div>
	);
};
