import '../styles/header.css'
import logoImg from '../Img/logo/logo.png';
import createHtmlElement from './renderElems';

const nav_options = [
    {Name: 'Home', id: 'homePage'},
    {Name: 'Menu', id: 'menuPage'},
    {Name: 'Contacts us', id: 'contactsPage'},
];

function header(){
    const header = document.createElement('header');
    const logo = createHtmlElement('img', 'logo', null);
    const nav = createHtmlElement('nav', 'nav_board', null);
    logo.src = logoImg;
    header.appendChild(logo);
        
    nav_options.forEach((item) => {
        const option = createHtmlElement('button', item.id, 'nav_button');
        option.textContent = item.Name;
        nav.appendChild(option);
        }
    );

    header.appendChild(nav);
    document.body.appendChild(header);
}


export default header;