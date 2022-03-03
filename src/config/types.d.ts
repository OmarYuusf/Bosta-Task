interface TrackingData {
  CurrentStatus: {
    state: string,
    timestamp: string,
  },
  PromisedDate: string,
  TrackingNumber: string,
  TrackingURL: string,
  SupportPhoneNumbers: string[],
  TransitEvents: { state: string, timestamp: string, hub: string }[],
  CreateDate: string
}

declare module '*.png'

interface TrackingInitStateTypes {
  data: TrackingData | null,
  isTrackingDropdownOpened: boolean
  trackingOrderIsLoading: boolean
}

// enums in trackingReducer
enum ActionsReduxTypesString {
  ADD_TRACKING_ORDER = "ADD_TRACKING_ORDER",
  TOGGLE_TRACKING_DROPDOWN = "TOGGLE_TRACKING_DROPDOWN",
  FETCH_TRACKING_ORDER_IS_LOADING = "FETCH_TRACKING_ORDER_IS_LOADING",
  CLEAN_DATA = "CLEAN_DATA"
}

interface ActionsReduxType {
  type: ActionsReduxTypesString,
  payload: object[]
}