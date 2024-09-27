import './styles/index.css'

import header from './modules/header.js';
import homePage from './modules/home.js';
import menuPage from './modules/menu.js'
import contactsPage from './modules/contacts.js'
import footer from './modules/footer.js'

const pages = {homePage, menuPage, contactsPage};

function render(currentPage){
    document.body.innerHTML = ' ';
    header();
    addFuncNavButtons();
    currentPage();
    footer();
}

function addFuncNavButtons() {
    const navButtons = document.querySelectorAll('.nav_button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            render(pages[button.id]);
        });
    });
}

render(homePage);



