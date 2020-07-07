'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addInput = document.querySelector('.adding__input'),
        addFilmForm = document.querySelector('.add'),
        addFilmCheckbox = addFilmForm.querySelector('input[type="checkbox"]');


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        poster.style.background = "url('img/bg.jpg') top center/cover no-repeat";
        genre.textContent = 'Драма';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(parent, films) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            movieList.innerHTML += `
            <li class="promo__interactive-item">${++i}. ${film}
                <div class="delete"></div>
            </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(movieList, movieDB.movies);
            });
        });
    }

    addFilmForm.lastElementChild.addEventListener('click', (e) => {
        e.preventDefault();

        let newFilm = `${addInput.value.substring(0, 21)}`;

        if (newFilm.length >= 21) {
            newFilm = `${addInput.value.substring(0, 21)}...`;
        }

        if (newFilm != null && newFilm !== '' && newFilm != 0 && newFilm != undefined) {
            movieDB.movies.push(newFilm.toUpperCase());

            createMovieList(movieList, movieDB.movies);

            if (addFilmCheckbox.checked) {
                console.log('Добавляем любимый фильм!');
            }
        }

        addInput.value = '';
    });

    deleteAdv(adv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieList, movieDB.movies);
});









// movieList.innerHTML += `
//             <li class="promo__interactive-item">${++i}. ${addInput.value.substring(0, 21)}...
//                 <div class="delete"></div>
//             </li>
//         `;