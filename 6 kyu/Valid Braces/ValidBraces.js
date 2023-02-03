function validBraces (braces)
{
  var h = [];
  for (let i = 0; i<braces.length; i++) {
    let x = braces[i];
    if (x == '(' || x == '[' || x == '{') h.push(x);
    else if (x == '}') {
      if (h.length == 0) return false;
      else if (h[h.length-1] == '{') h.pop();
      else return false;
    }
    else if (x == ']') {
      if (h.length == 0) return false;
      else if (h[h.length-1] == '[') h.pop();
      else return false;
    }
    else if (x == ')') {
      if (h.length == 0) return false;
      else if (h[h.length-1] == '(') h.pop();
      else return false;
    }
  }
	return h.length == 0;
}
