function humanReadable (seconds) {
  let secs = (seconds%60).toString();
  let mins = (Math.floor(seconds/60)%60).toString();
  let hours = (Math.floor(seconds/3600)%100).toString();
  if (secs.length == 1) secs = "0"+secs;
  if (mins.length == 1) mins = "0"+mins;
  if (hours.length == 1) hours = "0"+hours;
  return hours+":"+mins+":"+secs;
}
