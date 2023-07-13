import axios from "axios";

const baseURL = "https://api.ipdata.co/";
const key = `?api-key=${import.meta.env.VITE_IPDATA_API_KEY}`;
const firstCall = baseURL + key;

const ipv4Regex: RegExp = /^(\d{1,3}\.){3}\d{1,3}$/;
const ipv6Regex: RegExp = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;

function makeURL(ipValue: string) {
  const reqURL = baseURL + ipValue + key;
  return reqURL;
}

export const getIPData = async (ipValue: string | null) => {
  if (ipValue === null) {
    const res = await axios.get(firstCall);
    const {
      ip,
      city,
      country_name,
      postal,
      latitude,
      longitude,
      carrier: { name: carrierName },
      time_zone: { offset: timeZoneOffset },
    } = res.data;
    const balls = {
      ip,
      city,
      country_name,
      postal,
      latitude,
      longitude,
      carrierName,
      timeZoneOffset,
    };
    return balls;
  } else if (ipv4Regex.test(ipValue) || ipv6Regex.test(ipValue)) {
    const res = await axios.get(makeURL(ipValue));
    const {
      ip,
      city,
      country_name,
      postal,
      latitude,
      longitude,
      asn: { name: carrierName },
      time_zone: { offset: timeZoneOffset },
    } = res.data;
    const balls = {
      ip,
      city,
      country_name,
      postal,
      latitude,
      longitude,
      carrierName,
      timeZoneOffset,
    };
    return balls;
  } else {
    throw new Error("Bad Request");

    return;
  }
};
