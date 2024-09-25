import bgImage from '../Img/bgHome/background_image_home_page.jpg'
import createHtmlElement from './renderElems';
import '../styles/home.css'

const homePageData = {
    title: `BAT'S NEST`,
    description: `Welcome to "Bat's Nest" — a cozy home restaurant 
    where every evening becomes a culinary adventure! We offer exquisite 
    dishes that blend tradition with modern trends to surprise you with unique 
    flavors!`
}


function homePage(){
    const main = document.createElement('main');
    
    const home = createHtmlElement('div', 'home', null);
    main.appendChild(home);

    home.src = bgImage;
    const homeTitle = createHtmlElement('span', 'home_title', 'home_content');
    homeTitle.innerHTML = homePageData.title;
    const homeDescription = createHtmlElement('span', 'home_description', 'home_content');
    homeDescription.innerHTML = homePageData.description;

    const orderButton = createHtmlElement('button', 'order_button', null);
    orderButton.innerHTML = 'Order Now!';

    home.appendChild(homeTitle);
    home.appendChild(homeDescription);
    home.appendChild(orderButton);

    document.body.appendChild(main);
}

export default homePage;