import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import TrackingForm from './trackingForm';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';
import { FiMenu } from 'react-icons/fi';
import { Divider } from 'rsuite';
import { useState } from 'react';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

interface Props {}

export const Navbar: React.FC<Props> = () => {
	const [ isDropNavbar, setIsDropNavbar ] = useState<boolean>(false);
	const dispatch: AppDispatch = useDispatch();
	const { tracking: { isTrackingDropdownOpened } } = useSelector((state: RootState) => state);

	const list = (
		<ul>
			<li>
				<NavLink to="/">الرئيسية</NavLink>
			</li>
			<li>
				<NavLink to="/pricing">الأسعار</NavLink>
			</li>
			<li>
				<NavLink to="/contact">كلم المبيعات</NavLink>
			</li>
			<li>
				<NavLink to="/careers">الوظائف</NavLink>
			</li>
		</ul>
	);
	return (
		<div className="container-navbar">
			<div className="navbar container">
				<div className="navbar-right">
					<div className="navbar-right-logo">
						<NavLink to="/">
							<img
								src="https://bosta.co/wp-content/uploads/2019/08/Component.svg"
								alt="bosta logo - لوجو بوسطه"
							/>
						</NavLink>
					</div>
					<div className="navbar-right-list">{list}</div>
				</div>
				<div className="mobile-menu">
					<div onClick={() => setIsDropNavbar(prev => !prev)}>
						<FiMenu color="#ff0000" size={25} />
					</div>
				</div>
				<div className="navbar-left">
					<ul>
						<li
							onClick={() => {
								dispatch({ type: 'TOGGLE_TRACKING_DROPDOWN', payload: !isTrackingDropdownOpened });
							}}
						>
							تتبع شحنتك
							{isTrackingDropdownOpened ? <IoIosArrowUp /> : <IoIosArrowDown />}
							{isTrackingDropdownOpened ? <TrackingForm /> : null}
						</li>
						<li>
							<Link to="/sign-in">تسجيل الدخول</Link>
						</li>
						<li>ENG</li>
					</ul>
				</div>
			</div>

			<div
				className="container-mobile-list"
				style={{ display: isDropNavbar ? 'block' : 'none', height: isDropNavbar ? 'auto' : '0px' }}
			>
				{list}
				<Divider />
				<div className="mobile-list-container-form">
					<TrackingForm />
				</div>
			</div>
		</div>
	);
};
