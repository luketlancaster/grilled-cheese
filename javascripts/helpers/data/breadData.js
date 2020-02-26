const breads = [
  {
    id: 1,
    type: 'white',
    color: 'white',
    price: 1000
  },
  {
    id: 2,
    type: 'wheat',
    color: 'brown',
    price: 2000
  },
  {
    id: 3,
    type: 'rye',
    color: 'peru',
    price: 3000
  },
];

let selectedBreadId = '';

//type, color, price, id
const getBreads = () => {
  return breads;
}

const getSelectedBread = (breadId) => {
  selectedBreadId = breadId;
}

export default { getBreads, getSelectedBread }
