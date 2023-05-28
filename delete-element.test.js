const {
  findElementById, 
  deleteElementById
} = require('./find-element');


const dataStructure = {
  id: 1,
  text: 1,
  children: [
    {
      id: 2,
      text: 2
    },
    {
      id: 3,
      text: 3,
      children: [
        {
          id: 5,
          text: 5,
          children: [
            {
              id: 6,
              text: 6
            },  
          ]
        },  
      ]
    },
    {
      id: 8,
      text: 8
    },
    {
      id: 4,
      text: 4,
      children: [
        {
          id: 7,
          text: 7
        },  
      ]
    },
  ]
}

test('delete element with id=1', () => {
  const result = deleteElementById(1, dataStructure, dataStructure);
  expect(result).toEqual(null);
});

test('delete element with id=6', () => {
  const newStructure = deleteElementById(6, dataStructure, dataStructure);
  const result = findElementById(6, newStructure);
  expect(result).toEqual(undefined);
});

test('delete element with id=7', () => {
  const newStructure = deleteElementById(7, dataStructure, dataStructure);
  const result = findElementById(7, newStructure);
  expect(result).toEqual(undefined);
});