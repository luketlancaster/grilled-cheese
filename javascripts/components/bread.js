import util from '../helpers/util.js';
import breadData from '../helpers/data/breadData.js';

const getSelectedBread = (e) => {
  breadData.getSelectedBread(e.target.id);
}

const breadsToDom = () => {
  const breads = breadData.getBreads();
  let domString = `
    <h2>Choose Your Bread</h2>
    <span class="bread"><i class="fas fa-bread-slice"></i></span>
  `;

  breads.forEach(bread => {
    domString += `
      <div class="form-check form-check-inline">
        <input class="form-check-input bread-radio" type="radio" name="inlineRadioOptions" id="${bread.id}" value="${bread.type}">
        <label class="form-check-label bread-label" for="${bread.id}"><label>${bread.type}</label>
      </div>
    `;
  })

  util.printToDom('bread-container', domString);

  document.querySelectorAll('.bread-radio').forEach(bRadio => {
    bRadio.addEventListener('click', getSelectedBread);
  })
}

export default { breadsToDom }
