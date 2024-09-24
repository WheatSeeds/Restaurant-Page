import bgImage from '../Img/bgHome/background_image_home_page.jpg'
import createHtmlElement from './renderElems';

function home(){
    const homeContent = createHtmlElement('img', 'bg', null);
    homeContent.src = bgImage;
    document.body.appendChild(homeContent);
}

export default home;