export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((val, key, map) => {
    const newVal = val === 1 ? 100 : val;
    // eslint-disable-next-line
    map.set(key, newVal);
  });
  return new Map(map);
}
