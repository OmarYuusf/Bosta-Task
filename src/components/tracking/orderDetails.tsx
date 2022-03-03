import TrackingStepBar from './trackingStepBar';
import OrderDetailsHeader from './orderDetailsHeader';
import MoreDetailsAboutOrder from './moreDetailsAboutOrder';

interface Props {
	data: TrackingData;
}

const OrderDetails: React.FC<Props> = ({ data }) => {
	return (
		<div className="container-order-details">
			<div className="order-details-header">
				<OrderDetailsHeader data={data} />
				<TrackingStepBar data={data} />
			</div>
			<MoreDetailsAboutOrder data={data} />
		</div>
	);
};

export default OrderDetails;
