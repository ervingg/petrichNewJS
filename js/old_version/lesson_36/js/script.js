'use strict';

let inputUAH = document.getElementById('uah'),
    inputUSD = document.getElementById('usd');

inputUAH.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass);
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  //status, statusText, responseText/response, readyState
  request.addEventListener('readystatechange', function() {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);

      inputUSD.value = (inputUAH.value / data.usd).toFixed(2);
    } else {
      inputUSD.value = 'Error!';
    }
  });
});

inputUSD.addEventListener('input', () => {
  let request = new XMLHttpRequest();

  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('readystatechange', function() {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);

      inputUAH.value = (inputUSD.value / data.uah).toFixed(2);
    } else {
      inputUAH.value = 'Error!';
    }
  });
});

let refresh = document.querySelector('.refresh'),
    uahBlock = document.querySelector('.uah'),
    usdBlock = document.querySelector('.usd'),
    
    numClick = 1,
    numClickk = 0;

refresh.addEventListener('click', function () {
  numClick++;

  if (numClick % 2 == 0) {
    uahBlock.style.top = '90px';
    usdBlock.style.top = '0px';
  } else {
    uahBlock.style.top = '0px';
    usdBlock.style.top = '90px';
  }

  inputUSD.value = '';
  inputUAH.value = '';

  let uahBlockStyle = getComputedStyle(uahBlock),
    usdBlockStyle = getComputedStyle(usdBlock);

  if (uahBlockStyle.top === '90px' && usdBlockStyle.top === '0px') {
    inputUAH.outerHTML = '<input id="uah" type="text" readonly>';
    inputUSD.outerHTML = '<input id="usd" type="text">';
  } else if (usdBlockStyle.top === '90px' && uahBlockStyle.top === '0px') {
    inputUSD.outerHTML = '<input id="usd" type="text" readonly>';
    inputUAH.outerHTML = '<input id="uah" type="text">';
  }
});