func squareDigits(_ num: Int) -> Int {
  let str = String(num)
  var result = ""
  for x in str {
    result = result + String(x.wholeNumberValue! * x.wholeNumberValue!)
  }
  return Int(result) ?? 0
}
