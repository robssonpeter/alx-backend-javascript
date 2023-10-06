function updateUniqueItems(map) {
  const newMap = new Map();
  if (map instanceof Map) {
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
      } else {
        map.set(key, value);
      }
    });
  } else {
    throw Error('Cannot process');
  }
  return newMap;
}
module.exports = updateUniqueItems;
