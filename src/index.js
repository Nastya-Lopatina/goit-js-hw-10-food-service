import listMenuTpl from './templates/menu-food.hbs';
import listMenuInfo from './menu.json';
import './css/styles.css'

const listCards = document.querySelector('.js-menu');
const menuMarkup = createListMenuMarkup(listMenuInfo);

listCards.insertAdjacentHTML('beforeend', menuMarkup);

function createListMenuMarkup(listMenuInfo) {
    return listMenuTpl(listMenuInfo);
}


//Изменение темы//

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
  
const themeSwitcher = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

themeSwitcher.addEventListener('change', onChangeTheme )

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', Theme.LIGHT);
}

body.classList = localStorage.getItem('theme');

if (localStorage.getItem('theme') === Theme.DARK) {
    themeSwitcher.checked = true;
}


function onChangeTheme() {
    if (themeSwitcher.checked ) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem('theme', Theme.DARK);
        return;
    }

    else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        localStorage.setItem('theme', Theme.LIGHT);
    }
}
