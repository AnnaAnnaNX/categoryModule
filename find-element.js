const findElementById = (id, dataStructure) => {
  if (dataStructure?.id === id) {
    return dataStructure;
  }
  if (dataStructure?.children) {
    for (obj of dataStructure.children) {
      const result = findElementById(id, obj);
      if (result) {
        return result;
      }
    }
  }
}

const deleteElementById = (id, obj, dataStructure) => {
  if (id === obj?.id) return null;
  const children = obj.children;
  if (children) {
    const index = children.map((el) => (el.id)).indexOf(id);
    if (index != -1) {
      children.splice(index, 1);
      return dataStructure;
    }
    for (el of obj.children) {
      const result = deleteElementById(id, el, dataStructure);
      if (result) {
        return result;
      }
    }
  }

}


module.exports = {
  findElementById,
  deleteElementById
};



