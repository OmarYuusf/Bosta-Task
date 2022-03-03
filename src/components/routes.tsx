import { Routes, Route } from 'react-router-dom';
import Tracking from '../pages/tracking';
import { Home } from './../pages/home';

const RouteComponent: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/tracking/:id" element={<Tracking />} />
		</Routes>
	);
};

export default RouteComponent;
