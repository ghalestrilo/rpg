const modifyAt = (index, arr) =>
  callback => arr.map(
    (element, i) => ((i === index)
      ? callback(element)
      : element));

export default modifyAt;
