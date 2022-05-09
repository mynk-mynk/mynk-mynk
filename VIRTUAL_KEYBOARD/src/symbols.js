const row1 = [
    {'nameEN': '`', 'nameRU': 'ё', 'capsEN': '~', 'code': 'Backquote'}, 
    {'nameEN': '1', 'capsEN': '!', 'nameRU': '1', 'capsRU': '!', 'code': 'Digit1'}, 
    {'nameEN': '2', 'capsEN': '@', 'nameRU': '2', 'capsRU': '@', 'code': 'Digit2'}, 
    {'nameEN': '3', 'capsEN': '#', 'nameRU': '3', 'capsRU': '№', 'code': 'Digit3'}, 
    {'nameEN': '4', 'capsEN': '$', 'nameRU': '4', 'capsRU': ';', 'code': 'Digit4'}, 
    {'nameEN': '5', 'capsEN': '%', 'nameRU': '5', 'capsRU': '%', 'code': 'Digit5'}, 
    {'nameEN': '6', 'capsEN': '^', 'nameRU': '6', 'capsRU': ':', 'code': 'Digit6'}, 
    {'nameEN': '7', 'capsEN': '&', 'nameRU': '7', 'capsRU': '?', 'code': 'Digit7'}, 
    {'nameEN': '8', 'capsEN': '*', 'nameRU': '8', 'capsRU': '*', 'code': 'Digit8'}, 
    {'nameEN': '9', 'capsEN': '(', 'nameRU': '9', 'capsRU': '(', 'code': 'Digit9'}, 
    {'nameEN': '0', 'capsEN': ')', 'nameRU': '0', 'capsRU': ')', 'code': 'Digit0'}, 
    {'nameEN': '-', 'capsEN': '_', 'nameRU': '-', 'capsRU': '_', 'code': 'Minus'}, 
    {'nameEN': '=', 'capsEN': '+', 'nameRU': '=', 'capsRU': '+', 'code': 'Equal'}, 
    {'nameEN': '⌫', 'code': 'Backspace'}
];

const row2 = [
    {'nameEN': 'Tab', 'code': 'Tab'}, 
    {'nameEN': 'q', 'nameRU': 'й', 'code': 'KeyQ'}, 
    {'nameEN': 'w', 'nameRU': 'ц', 'code': 'KeyW'}, 
    {'nameEN': 'e', 'nameRU': 'у', 'code': 'KeyE'}, 
    {'nameEN': 'r', 'nameRU': 'к', 'code': 'KeyR'}, 
    {'nameEN': 't', 'nameRU': 'е', 'code': 'KeyT'}, 
    {'nameEN': 'y', 'nameRU': 'н', 'code': 'KeyY'}, 
    {'nameEN': 'u', 'nameRU': 'г', 'code': 'KeyU'}, 
    {'nameEN': 'i', 'nameRU': 'ш', 'code': 'KeyI'}, 
    {'nameEN': 'o', 'nameRU': 'щ', 'code': 'KeyO'}, 
    {'nameEN': 'p', 'nameRU': 'з', 'code': 'KeyP'}, 
    {'nameEN': '[', 'nameRU': 'х', 'code': 'BracketLeft'}, 
    {'nameEN': ']', 'nameRU': 'ъ', 'code': 'BracketRight'}, 
    {'nameEN': '\\', 'capsEN': '|', 'nameRU': '\\', 'capsRU': '|', 'code': 'Backslash'}
];

const row3 = [
    {'nameEN': '⇪', 'code': 'CapsLock'}, 
    {'nameEN': 'a', 'nameRU': 'ф', 'code': 'KeyA'}, 
    {'nameEN': 's', 'nameRU': 'ы', 'code': 'KeyS'}, 
    {'nameEN': 'd', 'nameRU': 'в', 'code': 'KeyD'}, 
    {'nameEN': 'f', 'nameRU': 'а', 'code': 'KeyF'}, 
    {'nameEN': 'g', 'nameRU': 'п', 'code': 'KeyG'}, 
    {'nameEN': 'h', 'nameRU': 'р', 'code': 'KeyH'}, 
    {'nameEN': 'j', 'nameRU': 'о', 'code': 'KeyJ'}, 
    {'nameEN': 'k', 'nameRU': 'л', 'code': 'KeyK'}, 
    {'nameEN': 'l', 'nameRU': 'д', 'code': 'KeyL'}, 
    {'nameEN': ';', 'capsEN': ':', 'nameRU': 'ж', 'code': 'Semicolon'}, 
    {'nameEN': '\'', 'capsEN': '"', 'nameRU': 'э', 'code': 'Quote'}, 
    {'nameEN': 'Enter', 'code': 'Enter'}
];

const row4 = [
    {'nameEN': 'Shift', 'code': 'ShiftLeft'}, 
    {'nameEN': 'z', 'nameRU': 'я', 'code': 'KeyZ'}, 
    {'nameEN': 'x', 'nameRU': 'ч', 'code': 'KeyX'},
    {'nameEN': 'c', 'nameRU': 'с', 'code': 'KeyC'}, 
    {'nameEN': 'v', 'nameRU': 'м', 'code': 'KeyV'}, 
    {'nameEN': 'b', 'nameRU': 'и', 'code': 'KeyB'}, 
    {'nameEN': 'n', 'nameRU': 'т', 'code': 'KeyN'}, 
    {'nameEN': 'm', 'nameRU': 'ь', 'code': 'KeyM'}, 
    {'nameEN': ',', 'capsEN': '<', 'nameRU': 'б', 'code': 'Comma'}, 
    {'nameEN': '.', 'capsEN': '>', 'nameRU': 'ю', 'code': 'Period'}, 
    {'nameEN': '/', 'capsEN': '?', 'nameRU': '.', 'capsRU': ',', 'code': 'Slash'}, 
    {'nameEN': '↑', 'code': 'ArrowUp'}, 
    {'nameEN': 'Shift', 'code': 'ShiftRight'}
];

const row5 = [
    {'nameEN': 'Ctrl', 'code': 'ControlLeft'}, 
    {'nameEN': '⊞', 'code': 'MetaLeft'}, 
    {'nameEN': 'Alt', 'code': 'AltLeft'}, 
    {'nameEN': ' ', 'code': 'Space'}, 
    {'nameEN': 'Alt', 'code': 'AltRight'}, 
    {'nameEN': 'Ctrl', 'code': 'ControlRight'}, 
    {'nameEN': '←', 'code': 'ArrowLeft'}, 
    {'nameEN': '↓', 'code': 'ArrowDown'}, 
    {'nameEN': '→', 'code': 'ArrowRight'}
];


export {row1, row2, row3, row4, row5};