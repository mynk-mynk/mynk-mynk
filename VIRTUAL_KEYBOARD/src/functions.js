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
    textArea.rows = '15';
    textArea.autofocus = true;
    page.append(textArea);

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard-container');
    page.append(keyboard);
    
    let os = document.createElement('p');
    let lang = document.createElement('p');
    os.textContent = 'Keyboard for Windows';
    lang.textContent = 'To switch language: Shift + Alt';
    page.append(os, lang);
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
    div.textContent = el.nameEn;
    return div;
}


export function assignBtnSize() {
    const btns = document.querySelectorAll('.keyboard-btn');
    const long = ['Tab', 'CapsLock', 'Shift', 'Enter', '→', '←']

    for (let btn of btns) {
        if (long.includes(btn.textContent)) {
            btn.classList.add('long');
        }
        if (btn.textContent === ' ') {
            btn.classList.add('space');
        }
    }
}
