/*
 * takes time in seconds and converts to hh:mm:ss format
 */

function formatTime(time) {
  // get hours mins and seconds
  let remaining = time;
  const hours = Math.floor(remaining / 3600);
  remaining = remaining % 3600;
  const mins = Math.floor(remaining / 60);
  remaining = remaining % 60;
  const secs = remaining;

  // don't display hours, or minutes if there are none
  if (hours > 0) {
    return padNums(hours, mins, secs);
  }
  if (mins > 0) {
    return padNums(mins, secs);
  }
  return padNums(secs);
}

// pad times under 10 and return all as string
function padNums(...args) {
  const padded = args.map(num => {
    return num < 10 ? "0" + num : "" + num;
  });
  return padded.length < 2 ? "0:" + padded[0] : padded.join(":");
}

export default formatTime;
