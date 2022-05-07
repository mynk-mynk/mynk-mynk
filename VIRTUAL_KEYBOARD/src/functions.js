import * as symbols from "./symbols";


export function pageStart() {
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
    let lang = document.createElement('p');
    let span = document.createElement('span');
    span.classList.add('current-lang');
    os.textContent = 'Keyboard for Windows';
    lang.textContent = 'To switch language: Shift + Alt';
    span.textContent = 'EN';
    page.append(os, lang, span);
}


export function createKeyboard() {
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
    div.textContent = el.nameEN;
    return div;
}


export function assignBtnSize() {
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


export function assignBtnClasses() {
    const btns = document.querySelectorAll('.keyboard-btn');
    const functional = ['Tab', 'Shift', 'Alt', 'Enter', 'Ctrl', 'Fn'];

    for (let btn of btns) {
        if (functional.includes(btn.textContent)) {
            btn.classList.add(`${btn.textContent.toLowerCase()}`);
        
        } else if (btn.textContent === '⇪') {
            btn.classList.add('capsLock');
        
        } else if (btn.textContent === '⌫') {
            btn.classList.add('backSpace');

        } else if (btn.textContent === '⊞') {
            btn.classList.add('windows');
        
        } else if (['←', '↑', '↓', '→'].includes(btn.textContent)) {
            btn.classList.add(`arrow${btn.textContent}`);
        
        } else {
            btn.classList.add('has-value');
        }
    }
}


export function toggleBtn(event) {
    event.target.classList.toggle('highlighted');
}

export function activateBtn(event) {
    event.target.classList.add('highlighted');
}

export function deactivateBtn(event) {
    event.target.classList.remove('highlighted');
}


export function addValue(btn) {
    const textArea = document.querySelector('textarea');
    textArea.value += btn.textContent;
}

// function respondToKeyboard() {
//     btn.classList.add('active');
//     btn.classList.remove('active');
// }


const changeableSymbols = [...symbols.row1, ...symbols.row2, ...symbols.row3, ...symbols.row4];

export function toggleLanguage() {
    let lang = document.querySelector('.current-lang');
    const butns = document.querySelectorAll('.has-value');

     if (lang.textContent === 'EN') {
        butns.forEach(btn => {
            for (let item of changeableSymbols) {
                if (btn.textContent === item.nameEN && item.nameRU) {
                    btn.textContent = item.nameRU;
                }
            }
        });
        lang.textContent = 'RU';
     
    } else if (lang.textContent === 'RU') {
        butns.forEach(btn => {
            for (let item of changeableSymbols) {
                if (btn.textContent === item.nameRU) {
                    btn.textContent = item.nameEN;
                }
            }
        });
        lang.textContent = 'EN';
     }
}