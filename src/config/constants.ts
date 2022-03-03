export const urlTracking = 'https://tracking.bosta.co/shipments/track/';

export const statusOfOrder = [
	{ enTitle: 'DELIVERED', arTitle: 'تم التوصيل', color: '#30d158', step: 4 },
	{ enTitle: 'DELIVERED_TO_SENDER', arTitle: 'تم الاسترجاع', color: '#ff3b30', step: 3 },
	{ enTitle: 'TICKET_CREATED', arTitle: 'تم انشاء الشحنة', color: '#5e5ce6', step: 1 },
	{ enTitle: 'PACKAGE_RECEIVED', arTitle: 'تم استلام الشحنة من التاجر', color: '#5e5ce6', step: 2 },
	{ enTitle: 'NOT_YET_SHIPPED', arTitle: 'لم يتم شحنها حتي الأن', color: '#ff9f0a', step: 3 },
	{ enTitle: 'OUT_FOR_DELIVERY', arTitle: 'خرجت للشحن', color: '#5e5ce6', step: 3 },
	{ enTitle: 'RECEIVED_DELIVERY_LOCATION', arTitle: 'استلام موقع الشحن', color: '#30d158', step: 3 },
	{ enTitle: 'WAITING_FOR_CUSTOMER_ACTION', arTitle: 'ينتظر العميل', color: '#ff9f0a', step: 3 },
	{ enTitle: 'IN_TRANSIT', arTitle: 'ترانزيت', color: '#ff9f0a', step: 3 }
];
