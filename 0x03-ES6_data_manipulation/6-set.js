function setFromArray(arr) {
  const set = new Set();
  arr.forEach((el) => {
    set.add(el);
  });
  return set;
}

module.exports = setFromArray;
