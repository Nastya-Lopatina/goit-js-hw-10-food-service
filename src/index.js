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
const body = document.body('body');

themeSwitcher.addEventListener('change', onChangeTheme )

const theme = localStorage.getItem('theme') || Theme.LIGHT

body.className = theme;

themeSwitcher.checked = theme === Theme.DARK


function onChangeTheme() {
    if (themeSwitcher.checked ) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem('theme', Theme.DARK);
        return;
    }

   
}
