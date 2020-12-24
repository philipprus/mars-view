import moment from "moment";

export const isValidDate = (date) => moment(date, "YYYY-MM-DD", true).isValid();
