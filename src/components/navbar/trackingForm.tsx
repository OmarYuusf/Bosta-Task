import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/rootReducer';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

const TrackingForm: React.FC = () => {
	const navigate = useNavigate();
	const [ trackingCode, setTrackingCode ] = useState<string>('');
	const dispatch: AppDispatch = useDispatch();

	const fetchOrderTracking = async (code: string): Promise<void> => {
		// await dispatch(await getTrackingData(code, navigate));
		dispatch({ type: 'TOGGLE_TRACKING_DROPDOWN', payload: false });
		navigate(`/tracking/${code}`);
	};

	return (
		<div className="dropdown-tracking-list" onClick={(e) => e.stopPropagation()}>
			<div className="dropdown-tracking-container-form">
				<h3>تتبع شحنتك</h3>
				<p>اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة</p>
				<div>
					<input
						placeholder="رقم الشحنة"
						type="text"
						value={trackingCode}
						onChange={(e) => setTrackingCode(e.target.value)}
					/>
					<button
						onClick={() => {
							fetchOrderTracking(trackingCode);
						}}
					>
						<FaSearch />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrackingForm;
