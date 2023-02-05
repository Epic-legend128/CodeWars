function trim(str, size) {
  return str.length <= size ? str : size <= 3 ? str.substring(0, size)+"..." :str.substring(0, size-3)+"...";
}
