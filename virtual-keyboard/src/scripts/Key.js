export default class Key {
    constructor({
      lowerCase, upperCase, code, value
    }) {
      this.lowerCase = lowerCase;
      this.upperCase = upperCase;
      this.code = code;
      this.value = value;
      this.renderHtml();
    }
  
    renderHtml() {
      this.keyel = document.createElement('div');
      this.keyel.className = 'vk-key';
      this.keyel.innerText = this.char(false);
      return this.keyel;
    }
  
    char(capsOn) {
      return capsOn ? this.upperCase : this.lowerCase;
    }

    getvalue(capsOn) {
      let val = this.value ? this.value : this.char(capsOn);
      return val
    }
  
    setCapsLock(capsOn) {
      this.keyel.innerText = this.char(capsOn);
    }

    press() {
      this.keyel.classList.add('press');
    }

    up() {
      this.keyel.classList.remove('press');
    }
  }