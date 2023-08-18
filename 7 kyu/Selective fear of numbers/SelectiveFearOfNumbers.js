var AmIAfraid = function(day, num){
  switch(day) {
      case "Monday": return num == 12;
      case "Tuesday": return num > 95;
      case "Wednesday": return num == 34;
      case "Thursday": return num == 0;
      case "Friday": return !(num%2);
      case "Saturday": return num == 56;
      case "Sunday": return Math.abs(num) == 666;
  }
}