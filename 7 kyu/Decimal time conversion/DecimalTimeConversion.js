const toIndustrial = time => typeof time == "string" ? parseInt(time.match(/.*:/)[0].replace(/:/, ''))+Math.round(parseInt(time.match(/:.*/)[0].replace(/:/, ''))/60*100)/100 : Math.round(time/60*100)/100;

const toNormal = time => parseInt(time).toString()+":"+('0'+Math.round((time-parseInt(time))*60).toString()).slice(-2)