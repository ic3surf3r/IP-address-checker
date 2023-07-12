import { createContext, useState } from "react";

type StateType = {
  ip: string;
  city: string;
  country: string;
  postal: string;
  latitude: number;
  longitude: number;
  carrierName: string;
  timezoneOffset: string;
  isLoading: boolean;
};

const baba: StateType = {
  ip: "",
  city: "",
  country: "",
  postal: "",
  latitude: 0,
  longitude: 0,
  carrierName: "",
  timezoneOffset: "",
  isLoading: true,
};

type ChildrenProps = {
  children: React.ReactNode;
};

const IPContext = createContext<{
  data: StateType;
  setData: any;
}>({ data: baba, setData: null });

export const IPProvider = ({ children }: ChildrenProps) => {
  const [data, setData] = useState(baba);
  const contextValue: any = {
    data,
    setData,
  };

  return (
    <IPContext.Provider value={contextValue}>{children}</IPContext.Provider>
  );
};

export default IPContext;
