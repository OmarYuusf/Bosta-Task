import { Table } from 'rsuite';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { statusOfOrder } from '../../config/constants';

const { Column, HeaderCell, Cell } = Table;

interface Props {
	data: TrackingData;
}

const MoreDetailsAboutOrder: React.FC<Props> = ({ data }) => {
	const [ dataHanlded, setDataHanlded ] = useState<any>([]);

	useEffect(
		() => {
			if (data) {
				handleOrderMoreDetails();
			}
		},
		[ data ]
	);

	const handleOrderMoreDetails = (): void => {
		let result = [];
		const getStatueInArabic = (statue: string): string | undefined => {
			for (let i = 0; i < statusOfOrder.length; i++) {
				if (statusOfOrder[i].enTitle == statue) {
					return statusOfOrder[i].arTitle;
				}
			}
		};
		for (let i = 0; i < data.TransitEvents.length; i++) {
			result.push({
				base: 'مدينة نصر',
				timestamp: moment(data.TransitEvents[i].timestamp).format('L'),
				time: moment(data.TransitEvents[i].timestamp).format('LT'),
				statue: getStatueInArabic(data.TransitEvents[i].state)
			});
		}
		setDataHanlded(result);
	};
	return (
		<div className="contaienr-more-details-order">
			<div className="details">
				<h5>تفاصيل الشحنة</h5>
				<Table
        wordWrap
					virtualized
					height={400}
					data={dataHanlded}
					onRowClick={(data) => {
						console.log(data);
					}}
				>
					<Column width={150} align="right" fixed>
						<HeaderCell>الفرع</HeaderCell>
						<Cell dataKey="base" />
					</Column>

					<Column width={130}>
						<HeaderCell>التاريخ</HeaderCell>
						<Cell dataKey="timestamp" />
					</Column>

					<Column width={130}>
						<HeaderCell>الوقت</HeaderCell>
						<Cell dataKey="time" />
					</Column>
					<Column width={200}>
						<HeaderCell>التفاصيل</HeaderCell>
						<Cell dataKey="statue" />
					</Column>
				</Table>
			</div>
			<div className="location">
				<h5>عنوان التسليم</h5>
				<div>
					<p>هنا يوحدج جميع تفاصيل العنوان الي هيروح الطلب عليه</p>
				</div>
			</div>
		</div>
	);
};

export default MoreDetailsAboutOrder;
