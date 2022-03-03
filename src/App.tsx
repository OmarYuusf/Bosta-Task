import React from 'react';
import './style/pages/home.scss';
import './style/pages/global.scss';
import './style/pages/tracking.scss';
import 'rsuite/dist/rsuite-rtl.min.css';
import moment from "moment"
import Routes from './components/routes';

function App() {
	return (
		<div>
			<Routes />
		</div>
	);
}

export default App;
