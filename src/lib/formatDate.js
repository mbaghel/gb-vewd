import moment from "moment-timezone";

function formatDate(dateStr) {
  const now = moment().tz("America/Los_Angeles");
  const then = moment.tz(dateStr, "America/Los_Angeles");
  const diff = now.diff(then, "weeks");
  if (diff > 52) {
    return then.format("MMM D, 'YY");
  }
  if (diff > 1) {
    return then.format("MMM D");
  }
  return then.from(now);
}

export default formatDate;
