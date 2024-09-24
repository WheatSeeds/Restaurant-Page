import './styles/index.css'

import header from './modules/header.js';
import home from './modules/home.js';
import menu from './modules/menu.js'

const pages = {home, menu};

function render(currentPage){
    document.body.innerHTML = ' ';
    header();
    addFuncNavButtons();
    currentPage();
}

function addFuncNavButtons() {
    const navButtons = document.querySelectorAll('.nav_button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pages = { home, menu };
            render(pages[button.id]);
        });
    });
}

render(menu );



