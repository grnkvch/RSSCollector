import { BACK_END } from "../constants/endpoints";

export default function formQuery(sources = new Map()) {
  let queryString = `${BACK_END}/?`;
  sources.forEach((checked, source) => {
    if (checked) queryString += `source[]=${source}&`
  });
  return queryString;
}