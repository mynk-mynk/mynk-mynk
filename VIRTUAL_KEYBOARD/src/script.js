import './style.scss';
import * as symbols from "./symbols";

let [lang, caps] = ['EN', false];

const allSymbols = [...symbols.row1, ...symbols.row2, ...symbols.row3, ...symbols.row4, ...symbols.row5];


// Functions

function pageStart() {
    let page = document.createElement('div');
    page.classList.add('container');
    document.body.append(page);

    let header = document.createElement('h1');
    header.textContent = 'Virtual keyboard';
    page.append(header);

    let textArea = document.createElement('textarea');
    textArea.name = 'textarea';
    textArea.id = 'textarea';
    textArea.rows = '10';
    textArea.autofocus = true;
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
    div.textContent = el[`name${lang}`];
    return div;
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


// function assignBtnClasses() {
//     const btns = document.querySelectorAll('.keyboard-btn');
//     const functional = ['Tab', 'Shift', 'Alt', 'Enter', 'Ctrl', 'Fn'];

//     for (let btn of btns) {
//         if (functional.includes(btn.textContent)) {
//             btn.classList.add(`${btn.textContent.toLowerCase()}`);

//         } else if (btn.textContent === '⇪') {
//             btn.classList.add('capsLock');

//         } else if (btn.textContent === '⌫') {
//             btn.classList.add('backSpace');

//         } else if (btn.textContent === '⊞') {
//             btn.classList.add('windows');

//         } else if (['←', '↑', '↓', '→'].includes(btn.textContent)) {
//             btn.classList.add(`arrow${btn.textContent}`);

//         } else {
//             btn.classList.add('has-value');
//         }
//     }
// }


function toggleBtn(event) {
    event.target.classList.toggle('highlighted');
}

function activateBtn(event) {
    event.target.classList.add('highlighted');
}

function deactivateBtn(event) {
    event.target.classList.remove('highlighted');
}


function onBtnClick(btn) {
    const textArea = document.querySelector('textarea');
    const enter = document.querySelector('.enter');
    const backSpace = document.querySelector('.backSpace');
    const tab = document.querySelector('.tab');

    if (btn === enter) textArea.value += '\n';
    if (btn === backSpace) textArea.value = textArea.value.slice(0, -1);
    if (btn === tab) textArea.value = '    ' + textArea.value;

    if (btn.matches('.has-value')) textArea.value += btn.textContent;
}


function toggleLanguage() {
    const butns = document.querySelectorAll('.has-value');

    if (lang === 'EN') {
        butns.forEach(btn => {
            for (let item of allSymbols) {
                if (btn.textContent === item.nameEN) {
                    btn.textContent = item.nameRU;
                    break;
                }
            }
        });
        lang = 'RU';

    } else if (lang === 'RU') {
        butns.forEach(btn => {
            for (let item of allSymbols) {
                if (btn.textContent === item.nameRU) {
                    btn.textContent = item.nameEN;
                    break;
                }
            }
        });
        lang = 'EN';
    }
}


function toggleCaps() {
    caps = !caps;

    if (caps) {
        capitalise();

    } else {
        deCapitalise();
    }
}


function capitalise() {
    const butns = document.querySelectorAll('.has-value');
    butns.forEach(btn => {

        for (let item of allSymbols) {
            const name = item[`name${lang}`] || '';

            if (btn.textContent === name) {

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
            const name = item[`name${lang}`] || '';

            if (btn.textContent === item[`caps${lang}`] ||
                btn.textContent === name.toUpperCase()) {

                if (name) {
                    btn.textContent = name;

                } else {
                    btn.textContent = btn.textContent.toLowerCase();
                }
            }
        }
    });
}


function pushVirtualBtn(event) {
    let btn = getBtnWithId(event.code);
    btn.classList.add('highlighted','active');
}

function reliseVirtualBtn(event) {
    let btn = getBtnWithId(event.code);
    btn.classList.remove('highlighted','active');
}


function getBtnWithId(id) {
    let btn = document.getElementById(`${id}`);

    for (let item of allSymbols) {
        if (btn.getAttribute('id') === item.code) return btn;
    }
}


// Start

pageStart();

createKeyboard();
assignBtnSize();
// assignBtnClasses()


const capsLock = document.getElementById('CapsLock');
const shiftL = document.getElementById('ShiftLeft');
const shiftR = document.getElementById('ShiftRight');


capsLock.addEventListener('click', toggleBtn);
capsLock.addEventListener('click', toggleCaps);


[shiftL, shiftR].forEach((el) => el.addEventListener('mousedown', activateBtn));
[shiftL, shiftR].forEach((el) => el.addEventListener('mousedown', capitalise));
[shiftL, shiftR].forEach((el) => el.addEventListener('mouseup', deactivateBtn));
[shiftL, shiftR].forEach((el) => el.addEventListener('mouseup', deCapitalise));


const keyboard = document.querySelector('.keyboard-container');
keyboard.addEventListener('click', (event) => onBtnClick(event.target))


document.addEventListener('keydown', function(event) {
    if (event.code == 'ShiftLeft' && event.ctrlKey ||
    event.code == 'ShiftRight' && event.ctrlKey) {
        toggleLanguage();
    }
  });

  document.addEventListener('keydown', (event) => pushVirtualBtn(event));
  document.addEventListener('keyup', (event) => reliseVirtualBtn(event));

