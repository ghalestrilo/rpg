
const arrayFromIndexedObject = array =>
  Object.entries(array)
    .map(([ key, value ]) => ({ ...value, id: key }));

export default arrayFromIndexedObject;
