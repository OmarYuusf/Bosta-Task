import { combineReducers } from 'redux';
import trackingReducer from './reducers/trackingReducer';

const rootReducer = combineReducers({
	tracking: trackingReducer
});

export default rootReducer;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof rootReducer>;
