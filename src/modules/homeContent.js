import bgImage from '../Img/bgHome/background_image_home_page.jpg'
import createHtmlElement from './render';
const homeContent = createHtmlElement('img', 'bg', null);
homeContent.src = bgImage;

export default homeContent;