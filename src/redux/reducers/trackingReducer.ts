const initState: TrackingInitStateTypes = {
  data: null,
  trackingOrderIsLoading: true,
  isTrackingDropdownOpened: true
}

const trackingReducer = function (state = initState, action: ActionsReduxType) {
  switch (action.type) {
    case "ADD_TRACKING_ORDER":
      return {
        ...state,
        data: action.payload
      }
    case "FETCH_TRACKING_ORDER_IS_LOADING":
      return {
        ...state,
        trackingOrderIsLoading: action.payload
      }
    case "TOGGLE_TRACKING_DROPDOWN":
      return {
        ...state,
        isTrackingDropdownOpened: action.payload
      }
    case "CLEAN_DATA":
      return {
        ...state,
        data: null
      }
    default:
      return state;
  }
};

export default trackingReducer 