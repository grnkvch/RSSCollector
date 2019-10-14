export default function dataConditioner(arr, n, itemTransform) {
  const initial = new Array(n);

  let counter = 0;
  return arr.reduce((acc, item) => {
    if (!acc[counter]) acc[counter] = [];
    acc[counter].push(itemTransform ? itemTransform(item) : item);
    counter += 1;
    if (counter > n - 1) counter = 0;
    return [...acc];
  },
    initial)
}