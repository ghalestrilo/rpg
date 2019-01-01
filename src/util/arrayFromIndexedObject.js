
const arrayFromIndexedObject = (array, keyName) =>
  Object.entries(array)
    .map(([ key, value ]) => ({
      ...value,
      [keyName || "id"]: key
    }));

export default arrayFromIndexedObject;
