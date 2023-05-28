let i = 0;
function findElementById(id, dataStructure) {
  console.log(dataStructure)
  console.log(i);i++;
  if (dataStructure.id === id) {
    return dataStructure;
  }
  if (dataStructure.children) {
    for (obj of dataStructure.children) {
      const result = findElementById(id, obj);
      if (result) {
        return result;
      }
    }
  }
}
module.exports = findElementById;



