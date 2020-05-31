import Key from './Key';

import '../styles/stylesheet.css';

import {
    engKeyboard
} from './engKeyboard';
const keyboardEng = engKeyboard;

class VirtualKeyboard {
    constructor(root) {
        this.keysSetup = [];
        this.capsLockOn = false;
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
        keyboardEng.map((i, idx) => {
            let rowElement = this.createVirtualKeyboardRow(idx);
            vkKeyboard.appendChild(rowElement);
        });
        this.setUpKeyboardListeners();
        return vkKeyboard;
    }

    createVirtualKeyboardRow(rowNumber) {
        const vkKeyboardRow = document.createElement('div');
        vkKeyboardRow.className = 'vk-row';
        keyboardEng[rowNumber].map((i, idx) => {
            let keyText = keyboardEng[rowNumber][idx];
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

    setUpKeyboardListeners() {
        document.addEventListener('keydown', (e) => {
            e.code === "CapsLock" && this.changeCaps();
        });
        document.addEventListener('keyup', (e) => {
            e.code === "CapsLock" && this.changeCaps();
        });

    }

    get htmlElement() {
        return this.root;
    }
}

let virtualKeyboard = new VirtualKeyboard(document.body);