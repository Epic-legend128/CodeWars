const sequenceSum = (begin, end, step) => {
  if ((begin > end && step>0) || (begin < end && step<0)) return 0;
  let limit = Math.abs(end-begin)+1;
  let amount = Math.ceil(limit/Math.abs(step))-1;
  let sum = (amount*(amount+1)/2)*step+((amount+1)*begin);
  return sum;
}
