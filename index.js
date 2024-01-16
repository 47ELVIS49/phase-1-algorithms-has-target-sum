function hasTargetSum(array, target) {
  let seen = new Set();

  for (let num of array) {
    const complement = target - num;

    if (seen.has(complement)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

module.exports = hasTargetSum;
