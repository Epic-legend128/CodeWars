function compare(a, b){
  if ((a == null && b != null) || (a != null && b == null)) return false;
  if (a == null && b == null) return true;
  return a.val == b.val && compare(a.left, b.left) && compare(a.right, b.right)
}
