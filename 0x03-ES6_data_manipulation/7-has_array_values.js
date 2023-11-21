function hasValuesFromArray(set, array) {
  const newSet = new Set();
  array.forEach((el) => {
    if (set.has(el)) {
      newSet.add(true);
    } else {
      newSet.add(false);
    }
  });
  return !newSet.has(false);
}

module.exports = hasValuesFromArray;
