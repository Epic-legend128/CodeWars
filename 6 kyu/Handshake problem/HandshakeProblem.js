function getParticipants(handshakes) {
  let r = 0;
  for (let i = 0; true; i++) {
    r = i*(i-1)/2;
    if (r >= handshakes) return i;
  }
}