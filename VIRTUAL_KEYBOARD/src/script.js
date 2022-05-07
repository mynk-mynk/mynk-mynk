import './style.scss';

import { pageStart, createKeyboard, assignBtnSize, assignBtnClasses, toggleBtn, activateBtn, deactivateBtn, addValue, toggleLanguage } from './functions';

pageStart();

createKeyboard();
assignBtnSize();
assignBtnClasses()

const capsLock = document.querySelector('.capsLock');
const shift = document.querySelectorAll('.shift');

capsLock.addEventListener('click', toggleBtn);
shift.forEach(el => el.addEventListener('mousedown', activateBtn));
shift.forEach(el => el.addEventListener('mouseup', deactivateBtn));


const valueBtns = document.querySelectorAll('.has-value');

valueBtns.forEach(btn => btn.addEventListener('click', (event) => addValue(event.target)));


// for testing toggleLanguage
const space = document.querySelector('.space'); 
space.addEventListener('click', toggleLanguage);
// to be deleted