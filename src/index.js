import header from './modules/header.js';
import './styles/index.css'
import homeContent from './modules/homeContent.js';
import content from './modules/content.js';

function render(){
    document.body.appendChild(header);

    const main = document.createElement('main');
    main.appendChild(homeContent);
    document.body.appendChild(main);

}

render();