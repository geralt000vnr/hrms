import moment from "moment";
export function momentDate(dateValue) {
  return moment.unix(+dateValue / 1000).format("DD MMMM YYYY");
}
