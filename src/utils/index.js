export function getClass(i) {
  // if (i % 5 === 0) {
  //   return "big";
  // } else if (i % 6 === 0) {
  //   return "wide";
  // } else {
  //   return "tall";
  // }
  if (i % 2 === 0) {
    return "tall";
  } else {
    return "big";
  }
}
