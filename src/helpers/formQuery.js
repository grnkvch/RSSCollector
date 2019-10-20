export default function formQuery(sources = new Map()) {
  let queryString = `https://rss-collector-back.herokuapp.com/?`;
  sources.forEach((checked, source) => {
    if (checked) queryString += `source[]=${source}&`
  });
  return queryString;
}