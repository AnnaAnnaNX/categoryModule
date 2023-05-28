const { findElementById } = require('../index');


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

test('find element with id=1', () => {
  const result = findElementById(1, dataStructure);
  expect(result.text).toEqual(1);
});

test('find element with id=3', () => {
  const result = findElementById(3, dataStructure);
  expect(result.text).toEqual(3);
});

test('find element with id=3', () => {
  const result = findElementById(5, dataStructure);
  expect(result.text).toEqual(5);
});

test('find element with id=3', () => {
  const result = findElementById(7, dataStructure);
  expect(result.text).toEqual(7);
});

test('find element with id=3', () => {
  const result = findElementById(6, dataStructure);
  expect(result.text).toEqual(6);
});