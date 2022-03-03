import axios, { AxiosResponse } from 'axios';
import { urlTracking } from './../../config/constants';

export const getTrackingData = async (code: string): Promise<any> => {
  return async (dispatch: any): Promise<undefined | void> => {
    try {
      if (!code) {
        return console.log('code notfound!');
      }

      dispatch({ type: "FETCH_TRACKING_ORDER_IS_LOADING", payload: true })

      const { data }: AxiosResponse = await axios.get(`${urlTracking}${code}`);
      console.log(data)
      dispatch({ type: "ADD_TRACKING_ORDER", payload: data })

      dispatch({ type: "FETCH_TRACKING_ORDER_IS_LOADING", payload: false })
    } catch (e) {

      dispatch({ type: "FETCH_TRACKING_ORDER_IS_LOADING", payload: false })
      if (typeof e === 'string') {
        return console.log(e.toUpperCase());
      }
    }
  }
}