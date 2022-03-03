import { statusOfOrder } from '../../config/constants';
import moment from 'moment';

interface Props {
	data: TrackingData;
}

const OrderDetailsHeader: React.FC<Props> = ({ data }) => {
	const handleStatueContent = (currentStatue: string): string => {
		let result = 'تم الطلب';
		for (let i = 0; i < statusOfOrder.length; i++) {
			if (statusOfOrder[i].enTitle == currentStatue) {
				result = statusOfOrder[i].arTitle;
			}
		}
		return result;
	};

	const handleStatueColor = (currentStatue: string): string => {
		let result = '#01002e';
		for (let i = 0; i < statusOfOrder.length; i++) {
			if (statusOfOrder[i].enTitle == currentStatue) {
				result = statusOfOrder[i].color;
			}
		}
		return result;
	};

	return (
		<div className="container-order-details-header">
			<div className="collage-of-details-header">
				<div>
					<p>رقم الشحنة {data.TrackingNumber}</p>
					<h4 style={{ color: handleStatueColor(data.CurrentStatus.state) }}>
						{handleStatueContent(data.CurrentStatus.state)}
					</h4>
				</div>
				<div>
					<p>اخر تحديث</p>
					<h4>{moment(data.CurrentStatus.timestamp).fromNow()}</h4>
				</div>
				<div>
					<p>اسم التاجر</p>
					<h4>SOUQ.COM</h4>
				</div>
				<div>
					<p>موعد تسليم خلال</p>
					<h4>2 يناير 24</h4>
				</div>
			</div>
		</div>
	);
};

export default OrderDetailsHeader;
