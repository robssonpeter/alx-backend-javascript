function cleanSet(set, startString) {
  let substring;
  const { length } = startString;
  const newStrings = [];

  set.forEach((el) => {
    substring = el.substring(0, length);
    if (substring === startString && length > 0) {
      newStrings.push(el.substring(length));
    }
  });
  return newStrings.join('-');
}
module.exports = cleanSet;
