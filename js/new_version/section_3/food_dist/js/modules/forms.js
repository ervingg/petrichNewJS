import {
  closeModal,
  openModal
} from './modal';

import {
  postData
} from '../services/services';

function forms(formSelector, modalTimerId) {
  //ЕСЛИ ЕСТЬ СЕРВЕР/ДОМЕН
  // const forms = document.querySelectorAll(formSelector);

  // const message = {
  //   loading: 'img/form/spinner.svg',
  //   success: 'Спасибо! Скоро мы с вами свяжемся',
  //   failure: 'Что-то пошло не так...'
  // };

  // forms.forEach(item => {
  //   bindPostData(item);
  // });

  // //Тут была PostData, которая сейчас в services.js

  // function bindPostData(form) {
  //   form.addEventListener('submit', (e) => {
  //     e.preventDefault();

  //     const statusMessage = document.createElement('img');
  //     statusMessage.src = message.loading;
  //     statusMessage.style.cssText = `
  //       display: block;
  //       margin: 0 auto;
  //     `;
  //     form.insertAdjacentElement('afterend', statusMessage);

  //     //ЗАМЕНА НА FETCH
  //     // const request = new XMLHttpRequest();
  //     // request.open('POST', 'server.php');

  //     // FormData + XMLHttpRequest — не нужно писать заголовок, он создаётся автоматически
  //     //'multipart/form-data' — для FormData

  //     //для JSON нужен заголовок
  //     // request.setRequestHeader('Content-type', 'application/json');
  //     const formData = new FormData(form);

  //     //FOR FETCH
  //     const json = JSON.stringify(Object.fromEntries(formData.entries()));
  //     //Для FormData
  //     // request.send(formData);

  //     //ЗАМЕНА НА FETCH 
  //     // request.send(json);

  //     postData('http://localhost:3000/requests', json)
  //       .then(data => {
  //         console.log(data);
  //         showThanksModal(message.success);
  //         statusMessage.remove();
  //       })
  //       .catch(() => {
  //         showThanksModal(message.failure);
  //       })
  //       .finally(() => {
  //         form.reset();
  //       });

  //     //ЗАМЕНА НА FETCH
  //     // request.addEventListener('load', () => {
  //     //   if (request.status === 200) {
  //     //     console.log(request.response);
  //     //     showThanksModal(message.success);
  //     //     form.reset();
  //     //     statusMessage.remove();
  //     //   } else {
  //     //     showThanksModal(message.failure);
  //     //   }
  //     // });

  //   });
  // }

  // function showThanksModal(message) {
  //   const prevModalDialog = document.querySelector('.modal__dialog');

  //   prevModalDialog.classList.add('hide');
  //   openModal('.modal', modalTimerId);

  //   const thanksModal = document.createElement('div');
  //   thanksModal.classList.add('modal__dialog');
  //   thanksModal.innerHTML = `
  //     <div class="modal__content">
  //       <div class="modal__close" data-close>&times;</div>
  //       <div class="modal__title">${message}</div>
  //     </div>
  //   `;

  //   document.querySelector('.modal').append(thanksModal);
  //   setTimeout(() => {
  //     thanksModal.remove();
  //     prevModalDialog.classList.add('show');
  //     prevModalDialog.classList.remove('hide');
  //     closeModal('.modal');
  //   }, 4000);
  // }

  // fetch('http://localhost:3000/menu')
  //   .then(data => data.json())
  //   .then(res => console.log(res));
  
  //ЕСЛИ У МЕНЯ НЕТ НОРМАЛЬНОГО СЕРВЕРА/ДОМЕНА
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement('afterend', statusMessage);

      //ЗАМЕНА НА FETCH
      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');

      // FormData + XMLHttpRequest — не нужно писать заголовок, он создаётся автоматически
      //'multipart/form-data' — для FormData

      //для JSON нужен заголовок
      // request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);

      //FOR JSON, BUT NOT FETCH
      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      // const json = JSON.stringify(object); FOR FETCH

      //Для FormData
      // request.send(formData);

      //ЗАМЕНА НА FETCH 
      // request.send(json);

      fetch('server.php', {
          method: "POST",
          //НИЖЕ КОММЕНТАРИЙ ПОТОМУ ЧТО ЮЗАЕМ НЕ JSON
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(object)

          //FOR NOT JSON
          // body: formData
        })
        .then(data => {
          data.text();
        })
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });

      //ЗАМЕНА НА FETCH
      // request.addEventListener('load', () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     form.reset();
      //     statusMessage.remove();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });

    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal('.modal', modalTimerId);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal('.modal');
    }, 4000);
  }
}

// module.exports = forms;
export default forms;