export default function orderByProps(obj, arr) {
  const sortKey = [];
  const array = [];

  for (const name in obj) {
    if (arr.includes(name)) {
      array.push({ key: name, value: obj[name] });
    } else {
      sortKey.push({ key: name, value: obj[name] });
    }
  }
  sortKey.sort((prev, next) => (prev.key > next.key ? 1 : -1));
  return [...array, ...sortKey];
}