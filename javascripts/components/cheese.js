import util from '../helpers/util.js';
import cheeseData from '../helpers/data/cheeseData.js';

const getSelectedCheese = (e) => {
  cheeseData.getSelectedCheese(e.target.id);
}

const cheesesToDom = () => {
  const cheeses = cheeseData.getCheeses();
  let domString = `
    <h2>Choose Your Cheese</h2>
    <div class="d-flex flex-wrap">
  `;
  cheeses.forEach(cheese => {
    domString += `
      <button type="button" id="${cheese.id} "class="m-1 btn btn-secondary btn-lg cheese-button" style="background-color:${cheese.color}">${cheese.type}</button>
    `;
  });

  domString += '</div>'

  util.printToDom('cheese-container', domString);
  document.querySelectorAll('.cheese-button').forEach(chsBtn => {
    chsBtn.addEventListener('click', getSelectedCheese);
  })
}

export default { cheesesToDom }
