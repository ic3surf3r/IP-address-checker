type StateType = {
  ip: string;
  city: string;
  country: string;
  postal: string;
  latitude: number;
  longitude: number;
  carrierName: string;
  timezoneOffset: string;
};

const ipReducer = (state: StateType, action: any) => {
  switch (action.type) {
    case "SET_IP":
      return {
        ip: action.payload.ip,
        city: action.payload.city,
        country: action.payload.country_name,
        postal: action.payload.postal,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        carrierName: action.payload.carrierName,
        timezoneOffset: action.payload.timeZoneOffset,
        isLoading: false,
      };
    default:
      return {
        ...state,
        isLoading: true,
      };
  }
};

export default ipReducer;
