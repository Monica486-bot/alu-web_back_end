export default function cleanSet(set, startString) {
  if (!startString) return '';
  return [...set]
    .filter((v) => v.startsWith(startString))
    .map((v) => v.slice(startString.length))
    .join('-');
}
