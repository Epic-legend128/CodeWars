const periodIsLate = (last, today, cycleLength) => (today - last)/(60*60*24*1000) > cycleLength;
