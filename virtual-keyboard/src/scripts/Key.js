export default class Key {
  constructor({
    lowerCase,
    upperCase,
    code,
    value,
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
    const val = this.value ? this.value : this.char(capsOn);
    return val;
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

  changeLanguage(newLanguage, capsOn) {
    this.lowerCase = newLanguage.lowerCase;
    this.upperCase = newLanguage.upperCase;
    this.code = newLanguage.code;
    if (capsOn) {
      this.keyel.innerText = this.upperCase;
    } else {
      this.keyel.innerText = this.lowerCase;
    }
  }
}
