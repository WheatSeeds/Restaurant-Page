import '../styles/header.css'
import createHtmlElement from './render';


const header = document.createElement('header')
const logo = createHtmlElement('div', 'logo', null)
header.appendChild(logo);

export default header;