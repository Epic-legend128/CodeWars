function race(v1, v2, g) {
  if (v1 >= v2) return null;
  let time = (g*3600)/(v2-v1);
  let hours = parseInt(time/3600);
  let minutes = parseInt((time-hours*3600)/60);
  let seconds = Math.floor(time-hours*3600-minutes*60);
  
  return [hours, minutes, seconds];
}
