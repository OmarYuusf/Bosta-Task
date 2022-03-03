import { Layout } from '../components/layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { Params, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getTrackingData } from './../redux/actions/trackingActions';

import emptyOrder from '../assets/empty.png';
import TrackingForm from '../components/navbar/trackingForm';
import OrderDetails from '../components/tracking/orderDetails';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

const Tracking = () => {
	const { tracking: { data, isTrackingDropdownOpened, trackingOrderIsLoading } } = useSelector(
		(state: RootState) => state
	);
	const { id }: Readonly<Params<string>> = useParams();
	const dispatch: AppDispatch = useDispatch();

	useEffect(
		() => {
			if (id) {
				fetchOrderTracking(id);
			}
			return () => {
				dispatch({ type: 'CLEAN_DATA' });
			};
		},
		[ id ]
	);

	const fetchOrderTracking = async (orderId: string): Promise<void> => {
		await dispatch(await getTrackingData(orderId));
	};
	console.log(trackingOrderIsLoading, data);
	return (
		<div className="tracking-page">
			<Layout>
				<div className="container-tracking container">
					{!trackingOrderIsLoading && !data ? (
						<div className="empty-box">
							<img src={emptyOrder} />
							<h3>لا يوجد هذا الطلب</h3>
							<p>من فضلك تأكد من الرقم الخاص بالطلب</p>
							<div className="empty-box-form">
								<TrackingForm />
							</div>
						</div>
					) : null}
					{!trackingOrderIsLoading && data ? (
						<div className="order-details">
							<OrderDetails data={data} />
						</div>
					) : null}
				</div>
			</Layout>
		</div>
	);
};

export default Tracking;
