import Key from './Key';

import '../styles/stylesheet.css';

import {
  engKeyboard
} from './engKeyboard';
import {
  ukrKeyboard
} from './ukrKeyboard';

const keyboardEng = engKeyboard;
const keyboardUkr = ukrKeyboard;

class VirtualKeyboard {
  constructor(root) {
    this.keysSetup = [];
    this.keyboardLanguage = this.setKeyboardLanguage();
    this.capsLockOn = false;
    this.alt = false;
    this.ctrl = false;
    this.shift = false;
    this.title = this.createTitle("Virtual Keyboard on MacBook Pro");
    this.textArea = this.createTextArea(8, 50);
    this.vkKeyboard = this.createVirtualKeyboardContainer();
    // creating virtual keyboard container
    this.vkContainer = document.createElement('div');
    this.vkContainer.classList.add('vk-container');
    this.vkContainer.appendChild(this.title);
    this.vkContainer.appendChild(this.textArea);
    this.vkContainer.appendChild(this.vkKeyboard);

    this.root = root;
    this.root.appendChild(this.vkContainer)
  }

  createTitle(textOfTitle) {
    const title = document.createElement('h1');
    title.className = 'vk-title';
    title.innerText = textOfTitle;
    return title;
  }

  createTextArea(rows, cols) {
    const textArea = document.createElement('textarea');
    textArea.className = 'vk-textarea';
    textArea.id = 'textarea';
    textArea.rows = rows;
    textArea.cols = cols;
    return textArea;
  }

  createVirtualKeyboardContainer() {
    const vkKeyboard = document.createElement('div');
    vkKeyboard.className = 'vk-keyboard';
    vkKeyboard.id = 'keyboard';
    this.keyboardLanguage.map((i, idx) => {
      let rowElement = this.createVirtualKeyboardRow(idx);
      vkKeyboard.appendChild(rowElement);
    });
    this.setUpKeyboardListeners();
    return vkKeyboard;
  }

  createVirtualKeyboardRow(rowNumber) {
    const vkKeyboardRow = document.createElement('div');
    vkKeyboardRow.className = 'vk-row';
    this.keyboardLanguage[rowNumber].map((i, idx) => {
      let keyText = this.keyboardLanguage[rowNumber][idx];
      let keyElement = this.createVirtualKeyboardKey(keyText);
      vkKeyboardRow.appendChild(keyElement);
    })
    return vkKeyboardRow;
  }

  createVirtualKeyboardKey(key) {
    let elkey = new Key(key);
    this.keysSetup.push(elkey);
    return elkey.renderHtml();
  }

  changeCaps() {
    this.capsLockOn = !this.capsLockOn;
    this.keysSetup.forEach((item) => item.setCapsLock(this.capsLockOn));
  }

  setKeyboardLanguage() {
    return keyboardEng
  }

  changeKeyboardLanguage() {
    this.keyboardLanguage = this.keyboardLanguage === keyboardEng ? keyboardUkr : keyboardEng;
    this.keyboardLanguage.map((i, idx) => {
      i.map((j, jdx) => {
        this.keysSetup.map((item, index) => item.code === this.keyboardLanguage[idx][jdx].code &&
          this.keysSetup[index].changeLanguage(this.keyboardLanguage[idx][jdx], this.capsLockOn)
        )
      });
    })
  }

  setUpKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
      e.code === "CapsLock" && this.changeCaps();
    });
    document.addEventListener('keyup', (e) => {
      e.code === "CapsLock" && this.changeCaps();
    });
    document.addEventListener('keydown', (e) => {
      const key = this.keysSetup.find((item) => item.code === e.code);
      if (key.code === "Tab") {
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

let virtualKeyboard = new VirtualKeyboard(document.body);