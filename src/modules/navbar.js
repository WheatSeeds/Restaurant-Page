import '../styles/navbar.css'
import createHtmlElement from './render';
const navbar = document.createElement('nav');

const nav_options = [
    {Name: 'Menu', id: 'menu'},
    {Name: 'About us', id: 'about'},
    {Name: 'Contacts', id: 'contacts'},
];

nav_options.forEach((item) => {
    const option = createHtmlElement('button', item.id, 'nav_button')
    navbar.appendChild(option);
}
);
export default navbar;