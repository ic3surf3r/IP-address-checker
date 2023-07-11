import { createContext, useReducer } from "react";
import ipReducer from "./IPReducer";

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

const initialState: StateType = {
  ip: "",
  city: "",
  country: "",
  postal: "",
  latitude: 0,
  longitude: 0,
  carrierName: "",
  timezoneOffset: "",
};

type ChildrenProps = {
  children: React.ReactNode;
};

const IPContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const IPProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(ipReducer, initialState);
  const contextValue: any = {
    ...state,
    dispatch,
  };

  return (
    <IPContext.Provider value={contextValue}>{children}</IPContext.Provider>
  );
};

export default IPContext;
