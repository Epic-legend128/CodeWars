function indexOf(head, value, index=0) {
  if (head == null) return -1;
  if (head.data === value) return index;
  return indexOf(head.next, value, index+1);
}
