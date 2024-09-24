import '../styles/header.css'
import logoImg from '../Img/logo/logo.png';
import createHtmlElement from './renderElems';

const nav_options = [
    {Name: 'Home', id: 'home'},
    {Name: 'Menu', id: 'menu'},
    {Name: 'Contacts us', id: 'contacts_us'},
];

function header(){
    const header = document.createElement('header')
    const logo = createHtmlElement('img', 'logo', null)

    logo.src = logoImg;
    header.appendChild(logo);
        
    nav_options.forEach((item) => {
        const option = createHtmlElement('button', item.id, 'nav_button');
        option.innerHTML = item.Name;
        header.appendChild(option);
        }
    );
    document.body.appendChild(header);
}


export default header;