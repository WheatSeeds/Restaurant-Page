import './styles/index.css'

import header from './modules/header.js';
import homePage from './modules/home.js';
import menu from './modules/menu.js'

const pages = {homePage, menu};

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
            render(pages[button.id]);
        });
    });
}

render(menu);



