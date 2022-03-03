import React from 'react';
import { useState, useEffect } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { FaTruck } from 'react-icons/fa';
import { IoCloudDone } from 'react-icons/io5';
import { Steps } from 'rsuite';
import { statusOfOrder } from '../../config/constants';
// import "rsuite/dist/rsuite.min.css";

interface Props {
	data: TrackingData;
}

const TrackingStepBar: React.FC<Props> = ({ data }) => {
	const [ step, setStep ] = useState<number>(1);
	const [ currentStatue, setCurrentStatue ] = useState<string>('تم انشاء الشحنة');
	const [ currentColor, setCurrentColor ] = useState<string>('green');

	useEffect(
		() => {
			if (data) {
				handleOrderDetails(data.CurrentStatus.state);
			}
		},
		[ data ]
	);

	const handleOrderDetails = (currentStatue: string): void => {
		for (let i = 0; i < statusOfOrder.length; i++) {
			if (statusOfOrder[i].enTitle == currentStatue) {
				setStep(statusOfOrder[i].step);
				setCurrentStatue(statusOfOrder[i].arTitle);
				setCurrentColor(statusOfOrder[i].color);
			}
		}
	};
	return (
		<div className="container-stepper">
			<Steps current={step}>
				<Steps.Item
					title="تم انشاء الشحنه"
					icon={<BsCheckLg style={{ fontSize: 20 }} />}
					style={{ color: 'red' }}
				/>
				<Steps.Item title="تم استلام الشحنه من التاجر" icon={<BsCheckLg style={{ fontSize: 20 }} />} />
				<Steps.Item
					title={currentStatue == 'تم الاسترجاع' ? 'تم الاسترجاع' : 'الشحنه خرجت للتسليم'}
					icon={<FaTruck style={{ fontSize: 20 }} />}
					status={currentStatue == 'تم الاسترجاع' ? 'error' : 'finish'}
				/>
				<Steps.Item title="تم التسليم" icon={<IoCloudDone style={{ fontSize: 20 }} />} />
			</Steps>
		</div>
	);
};

export default TrackingStepBar;
