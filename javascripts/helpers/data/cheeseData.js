const cheeses = [
  {
    id: 1,
    type: 'Cheddar',
    color: 'orange',
    price: 50
  },
  {
    id: 2,
    type: 'Swiss',
    color: 'Beige',
    price: 55
  },
  {
    id: 3,
    type: 'Provalone',
    color: 'antiquewhite	',
    price: 40
  },
  {
    id: 4,
    type: 'Pepper Jack',
    color: 'crimson',
    price: 500
  },
  {
    id: 5,
    type: 'Red Leicester',
    color: 'firebrick',
    price: 100
  },
  {
    id: 6,
    type: 'Blue Cheese',
    color: 'powderblue',
    price: 10000
  },
]

let selectedCheese = '';

const getCheeses = () => {
  return cheeses;
}

const getSelectedCheese = (cheeseId) => {
  selectedCheese = cheeseId;
  console.log('selected cheese:', selectedCheese);
}

export default { getCheeses, getSelectedCheese }
