import Key from './Key';

import '../styles/stylesheet.css';

import { engKeyboard } from './engKeyboard';
import { ukrKeyboard } from './ukrKeyboard';

const keyboardEng = engKeyboard;
const keyboardUkr = ukrKeyboard;

class VirtualKeyboard {
  constructor(root) {
    this.keysSetup = [];
    this.keyboardLanguage = [];
    this.capsLockOn = false;
    this.alt = false;
    this.ctrl = false;
    this.shift = false;
    this.setKeyboardLanguage();
    this.title = this.createTitle('Virtual Keyboard on MacBook Pro');
    this.textArea = this.createTextArea(8, 50);
    this.vkKeyboard = this.createVirtualKeyboardContainer();
    this.changingLanguageInfo = this.createInfoAboutChangingLanguage();
    // creating virtual keyboard container
    this.vkContainer = document.createElement('div');
    this.vkContainer.classList.add('vk-container');
    this.vkContainer.appendChild(this.title);
    this.vkContainer.appendChild(this.textArea);
    this.vkContainer.appendChild(this.vkKeyboard);
    this.vkContainer.appendChild(this.changingLanguageInfo);

    this.root = root;
    this.root.appendChild(this.vkContainer);
    this.setUpMouseListeners();
  }

  createTitle(textOfTitle) {
    this.title = document.createElement('h1');
    this.title.className = 'vk-title';
    this.title.innerText = textOfTitle;
    return this.title;
  }

  createTextArea(rows, cols) {
    this.textArea = document.createElement('textarea');
    this.textArea.className = 'vk-textarea';
    this.textArea.id = 'textarea';
    this.textArea.rows = rows;
    this.textArea.cols = cols;
    return this.textArea;
  }

  createVirtualKeyboardContainer() {
    const vkKeyboard = document.createElement('div');
    vkKeyboard.className = 'vk-keyboard';
    vkKeyboard.id = 'keyboard';
    this.keyboardLanguage.map((i, idx) => {
      const rowElement = this.createVirtualKeyboardRow(idx);
      vkKeyboard.appendChild(rowElement);
    });
    this.setUpKeyboardListeners();
    return vkKeyboard;
  }

  createVirtualKeyboardRow(rowNumber) {
    const vkKeyboardRow = document.createElement('div');
    vkKeyboardRow.className = 'vk-row';
    this.keyboardLanguage[rowNumber].map((i, idx) => {
      const keyText = this.keyboardLanguage[rowNumber][idx];
      const keyElement = this.createVirtualKeyboardKey(keyText);
      vkKeyboardRow.appendChild(keyElement);
    });
    return vkKeyboardRow;
  }

  createVirtualKeyboardKey(key) {
    const elkey = new Key(key);
    this.keysSetup.push(elkey);
    return elkey.renderHtml();
  }

  createInfoAboutChangingLanguage() {
    this.vkInfoAboutChangingLanguage = document.createElement('p');
    this.vkInfoAboutChangingLanguage.className = 'vk-info-lang';
    this.vkInfoAboutChangingLanguage.innerText = "To change the keyboard language press the 'Command' key.";
    return this.vkInfoAboutChangingLanguage;
  }

  changeCaps() {
    this.capsLockOn = !this.capsLockOn;
    this.keysSetup.forEach((item) => item.setCapsLock(this.capsLockOn));
  }

  setKeyboardLanguage() {
    if (localStorage.getItem('vk-language')) {
      this.keyboardLanguage = JSON.parse(localStorage.getItem('vk-language'));
    } else {
      this.keyboardLanguage = keyboardEng;
      localStorage.setItem('vk-language', JSON.stringify(this.keyboardLanguage));
    }
  }

  changeKeyboardLanguage() {
    this.keyboardLanguage = this.keyboardLanguage === keyboardEng ? keyboardUkr : keyboardEng;
    this.keyboardLanguage.map((i, idx) => {
      i.map((j, jdx) => {
        this.keysSetup.map((item, index) => item.code === this.keyboardLanguage[idx][jdx].code
          && this.keysSetup[index].changeLanguage(this.keyboardLanguage[idx][jdx], this.capsLockOn));
      });
    });
    localStorage.setItem('vk-language', JSON.stringify(this.keyboardLanguage));
  }

  setUpKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'CapsLock') {
        this.changeCaps();
      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code === 'CapsLock') {
        this.changeCaps();
      }
    });
    document.addEventListener('keydown', (e) => {
      const key = this.keysSetup.find((item) => item.code === e.code);
      if (key.code === 'Tab') {
        e.preventDefault();
      }
      key.press();
      this.generateChar(key);
    });
    document.addEventListener('keyup', (e) => {
      const key = this.keysSetup.find((item) => item.code === e.code);
      key.up();
      switch (key.code) {
        case 'ShiftLeft':
        case 'ShiftRight':
          if (!this.shift) {
            break;
          } else {
            this.shift = false;
            this.changeCaps();
            break;
          }
        case 'AltLeft':
        case 'AltRight':
          this.alt = false;
          break;
        case 'ControlLeft':
        case 'ControlRight':
          this.ctrl = false;
          break;
        default:
          break;
      }
    });
  }

  setUpMouseListeners() {
    document.addEventListener('mousedown', (e) => {
      if (e.target.className === 'vk-key' || e.target.className === 'vk-key press') {
        const key = this.keysSetup.find((item) => item.keyel === e.target);
        if (key.code && key.code === 'Tab') {
          e.preventDefault();
        }
        if (key.code === 'CapsLock') {
          this.changeCaps();
        }
        key.press();
        this.generateChar(key);
      }
    });
    document.addEventListener('mouseup', (e) => {
      if (e.target.className === 'vk-key press') {
        const key = this.keysSetup.find((item) => item.keyel === e.target);
        if (key.code !== 'CapsLock') {
          key.up();
          if (key.lowerCase === 'Shift') {
            this.shift = false;
          }
        }
        if (key.code === 'CapsLock') {
          if (!this.capsLockOn) {
            key.up();
          }
        }
      }
    });
  }

  generateChar(key) {
    switch (key.code) {
      case 'Backspace':
        this.textArea.value = this.textArea.value.slice(0, -1);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (this.shift) {
          break;
        } else {
          this.shift = true;
          this.changeCaps();
          break;
        }
      case 'CapsLock':
        break;
      case 'AltLeft':
      case 'AltRight':
        this.alt = true;
        break;
      case 'ControlLeft':
      case 'ControlRight':
        this.ctrl = true;
        break;
      case 'MetaLeft':
      case 'MetaRight':
        this.changeKeyboardLanguage();
        break;
      default:
        this.textArea.value += key.getvalue(this.capsLockOn);
        this.textArea.innerText = this.textArea.value;
        break;
    }
  }

  get htmlElement() {
    return this.root;
  }
}

const virtualKeyboard = new VirtualKeyboard(document.body);
