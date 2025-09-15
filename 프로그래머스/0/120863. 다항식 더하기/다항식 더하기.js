function solution(polynomial) {
  const terms = polynomial.split(" + ");
  let xSum = 0;
  let cSum = 0;

  for (let t of terms) {
    if (t.includes("x")) {
      if (t === "x") xSum += 1;
      else xSum += parseInt(t.replace("x", ""));
    } else {
      cSum += parseInt(t);
    }
  }

  let result = [];
  if (xSum > 0) result.push((xSum === 1 ? "" : xSum) + "x");
  if (cSum > 0) result.push(cSum.toString());

  return result.join(" + ");
}
