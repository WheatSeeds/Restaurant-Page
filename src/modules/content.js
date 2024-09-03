import menu from '../menuData.js'
import '../styles/content.css'
const content = document.createElement('main');
const catalog = document.createElement('div');
catalog.setAttribute('id', 'catalog_grid');
menu.forEach((e) => {
    const card = document.createElement('div');
    card.setAttribute('id', e.id)
    card.setAttribute('class', 'category_card')
    catalog.appendChild(card);
}
);
content.appendChild(catalog);
export default content;