'use strict';

let height = prompt('Desired height', ''),
    width = prompt('Desired width', ''),
    backgroundColor = prompt('Desired color (hex, rgb, rgba, key word)', ''),
    fontSize = prompt('Desired font size', ''),
    fontFamily = prompt('Desired font family', ''),
    textAlign = prompt('Desired font location'),
    message = prompt('Your message', '');

class Options {
  constructor(h, w, bg, fs, ff, tA, mess) {
    this.height = h;
    this.width = w;
    this.bg = bg;
    this.fontSize = fs;
    this.fontFamily = ff;
    this.textAlign = tA;
    this.message = mess;
  }

  createTextArea() {
    let figure = document.createElement('div');

    document.body.appendChild(figure);

    let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; font-family:${this.fontFamily}; text-align:${this.textAlign}`;

    figure.style.cssText = param;
    figure.innerText = this.message;
  }
}

let test = new Options(height, width, backgroundColor, fontSize, fontFamily, textAlign, message);
test.createTextArea();