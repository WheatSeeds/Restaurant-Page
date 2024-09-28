import createHtmlElement from "./renderElems";
import '../styles/footer.css'
import image from '../Img/logo/logo.png'

function footer(){
    const footer = document.createElement('footer');
    const footerDescriptionBlock = createHtmlElement('div', 'footer_description_block', 'footer_block');
    footerDescriptionBlock.innerHTML = `
        <div id='footer_description_title'>
            <img src='${image}' alt =''>
            <span>BAT\'S NEST</span>
        </div>
        <span>Welcome to "Bat's Nest" — a cozy home restaurant 
        where every evening becomes a culinary adventure! We offer exquisite 
        dishes that blend tradition with modern trends to surprise you with unique 
        flavors!</span>
    `;
    footer.appendChild(footerDescriptionBlock);

    const footerInformationBlock = createHtmlElement('div', 'footer_Information_block', 'footer_block');
    footerInformationBlock.innerHTML = `
        <span>Information</span>
        <span>Location:</span>
        <span>1234 Phantom Lane Ghost Town, ST 56789 United States</span>
        <span>Open Hours:</span>
        <span>Monday - Saturday: 8am - 12pm</span>
    `;
    footer.appendChild(footerInformationBlock);

    const footerNavigationButtons = ['Home', 'Menu', 'Contact Us'];
    const footerNavigationBlock = createHtmlElement('div', 'footer_navigation_block', 'footer_block');
    footerNavigationBlock.innerHTML = `<span>Navigation</span>`;
    footerNavigationButtons.forEach((e) => {
        const navButton = document.createElement('button');
        navButton.textContent = e;
        footerNavigationBlock.appendChild(navButton);
    });
    footer.appendChild(footerNavigationBlock);

    document.body.appendChild(footer);
}
export default footer;