const { addElementAfter } = require('../index');


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

const el = {
  id: 9,
  text: 9
}

// after 6
const dataStructureAddBefore = {
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
              id: 9,
              text: 9
            },
            {
              id: 6,
              text: 6
            }
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

test('addElement', () => {
  const result = addElementAfter(el, 1, dataStructure, dataStructure);
  expect(result).toEqual(null);
});

test('addElement', () => {
  const result = addElementAfter(el, 6, dataStructure, dataStructure, 'before');
  expect(result).toEqual(dataStructureAddBefore);
});
