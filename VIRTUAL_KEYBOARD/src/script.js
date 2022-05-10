import './style.scss';
import * as symbols from "./symbols";

let lang;
let caps = false;

const allSymbols = [...symbols.row1, ...symbols.row2, ...symbols.row3, ...symbols.row4, ...symbols.row5];


// Functions

function setLocalStorage() {
    let language = lang || 'EN';
    localStorage.setItem('language', language);
}

function getLocalStorage() {
    lang = localStorage.getItem('language');
}


function pageStart() {
    let page = document.createElement('div');
    page.classList.add('container');
    document.body.append(page);

    let header = document.createElement('h1');
    header.textContent = 'Virtual keyboard';
    page.append(header);

    let clearBtn = document.createElement('span');
    clearBtn.classList.add('clear-btn');
    clearBtn.textContent = 'clear';
    page.append(clearBtn);

    let textArea = document.createElement('textarea');
    textArea.name = 'textarea';
    textArea.id = 'textarea';
    textArea.rows = '10';
    // textArea.autofocus = true;
    page.append(textArea);

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard-container');
    page.append(keyboard);

    let os = document.createElement('p');
    let switchLang = document.createElement('p');
    os.textContent = 'Keyboard for Windows';
    switchLang.textContent = 'To switch language: Shift + Ctrl';
    page.append(os, switchLang);
}


function createKeyboard() {
    for (let item in symbols) {
        createRow(symbols[item]);
    }
}


function createRow(arr) {
    const keyboard = document.querySelector('.keyboard-container');
    let row = document.createElement('div');
    row.classList.add('keyboard-row');
    arr.forEach(item => row.append(createBtn(item)));
    keyboard.append(row);
}


function createBtn(el) {
    let div = document.createElement('div');
    div.classList.add('keyboard-btn');
    div.setAttribute('id', el.code);
    div.textContent = el[`name${lang}`] ? el[`name${lang}`] : el.nameEN;
    return div;
}

function assignClassToChangeableBtns() {
    const btns = document.querySelectorAll('.keyboard-btn');
    const functional = ['Tab', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'Enter', 'ControlLeft', 'ControlRight', 'Backspace'];
    const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    for (let btn of btns) {
        let id = btn.getAttribute('id') || '';

        if (!functional.includes(id) && !arrows.includes(id)) {
            btn.classList.add('has-value');
        }
    }
}

function assignBtnSize() {
    const btns = document.querySelectorAll('.keyboard-btn');
    const long = ['Tab', 'Shift', 'Enter', '→', '←']

    for (let btn of btns) {
        if (long.includes(btn.textContent)) {
            btn.classList.add('long');
        }
        if (btn.textContent === ' ') {
            btn.classList.add('space');
        }
    }
}



function activateBtn(event) {
    event.target.classList.add('highlighted');
}

function deactivateBtn(event) {
    event.target.classList.remove('highlighted');
}


function onBtnClick(btn) {
    const enter = document.getElementById('Enter');
    const backSpace = document.getElementById('Backspace');
    const tab = document.getElementById('Tab');
    const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

    if (btn === enter) textArea.value += '\n';
    if (btn === backSpace) textArea.value = textArea.value.slice(0, -1);
    if (btn === tab) textArea.value += '   ';

    if (btn.matches('.has-value')) textArea.value += btn.textContent;
    if (arrows.includes(btn.getAttribute('id'))) textArea.value += btn.textContent;
}


function onKeyDown(event) {
    // if (['Tab', 'AltLeft', 'AltRight'].includes(event.code)) {
    event.preventDefault();

    if (event.code === 'Tab') {
        textArea.value += '   ';

    } else {
        let btn = getBtnWithId(event.code);
        if (btn) onBtnClick(btn);
    }
}

function clearTextarea() {
    textArea.value = '';
}


function toggleLanguage() {
    const butns = document.querySelectorAll('.has-value');

    if (lang === 'EN') {
        butns.forEach(btn => {
            for (let item of allSymbols) {
                if (btn.getAttribute('id') === item.code) {
                    btn.textContent = item.nameRU;
                    if (caps) capitalise();
                    break;
                }
            }
        });
        lang = 'RU';

    } else if (lang === 'RU') {
        butns.forEach(btn => {
            for (let item of allSymbols) {
                if (btn.getAttribute('id') === item.code) {
                    btn.textContent = item.nameEN;
                    if (caps) capitalise();
                    break;
                }
            }
        });
        lang = 'EN';
    }
}


function toggleCaps() {
    caps = !caps;
    const capsLock = document.getElementById('CapsLock');

    if (caps) {
        capitalise();
        capsLock.classList.add('highlighted');

    } else {
        deCapitalise();
        capsLock.classList.remove('highlighted');
    }
}


function capitalise() {
    const btns = document.querySelectorAll('.has-value');
    btns.forEach(btn => {

        for (let item of allSymbols) {

            if (btn.getAttribute('id') === item.code) {

                if (item[`caps${lang}`]) {
                    btn.textContent = item[`caps${lang}`];

                } else {
                    btn.textContent = btn.textContent.toUpperCase();
                }
            }
        }
    });
}


function deCapitalise() {
    const butns = document.querySelectorAll('.has-value');
    butns.forEach(btn => {

        for (let item of allSymbols) {

            if (btn.getAttribute('id') === item.code) {

                if (item[`name${lang}`]) {
                    btn.textContent = item[`name${lang}`];

                } else {
                    btn.textContent = btn.textContent.toLowerCase();
                }
            }
        }
    });
}


function pushVirtualBtn(event) {
    let btn = getBtnWithId(event.code) ?? '';
    if (btn) btn.classList.add('highlighted', 'active');
}

function reliseVirtualBtn(event) {
    let btn = getBtnWithId(event.code) ?? '';

    if (btn) {
        let id = btn.getAttribute('id');

        if (id !== 'CapsLock') {
            btn.classList.remove('highlighted', 'active');

        } else if (id && id === 'CapsLock') {
            if (!caps) btn.classList.remove('highlighted', 'active');
        }
    }
}


function getBtnWithId(id) {

    if (document.getElementById(`${id}`)) {
        let btn = document.getElementById(`${id}`);
        let btnId = btn.getAttribute('id');

        for (let item of allSymbols) {
            if (btnId === item.code) return btn;
        }
    }
}



// Start

getLocalStorage();
pageStart();

createKeyboard();
assignBtnSize();
assignClassToChangeableBtns();

const capsLock = document.getElementById('CapsLock');
const shiftL = document.getElementById('ShiftLeft');
const shiftR = document.getElementById('ShiftRight');

const textArea = document.querySelector('textarea');

const clearing = document.querySelector('.clear-btn');


clearing.addEventListener('click', clearTextarea);

capsLock.addEventListener('click', toggleCaps);


[shiftL, shiftR].forEach((el) => el.addEventListener('mousedown', activateBtn));
[shiftL, shiftR].forEach((el) => el.addEventListener('mousedown', capitalise));
[shiftL, shiftR].forEach((el) => el.addEventListener('mouseup', deactivateBtn));
[shiftL, shiftR].forEach((el) => el.addEventListener('mouseup', deCapitalise));


const keyboard = document.querySelector('.keyboard-container');
keyboard.addEventListener('click', (event) => onBtnClick(event.target));


document.addEventListener('keydown', (event) => onKeyDown(event));
document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
        toggleCaps();
    }
});


document.addEventListener('keydown', function (event) {
    if (event.code == 'ShiftLeft' && event.ctrlKey ||
        event.code == 'ShiftRight' && event.ctrlKey) {
        toggleLanguage();
    }
});


document.addEventListener('keydown', (event) => pushVirtualBtn(event));
document.addEventListener('keyup', (event) => reliseVirtualBtn(event));

window.addEventListener('beforeunload', setLocalStorage);
