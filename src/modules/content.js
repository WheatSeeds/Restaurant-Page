import data from '../menuData.json'
import createHtmlElement from './render';
import '../styles/content.css'

const content = document.createElement('main');
const catalog = createHtmlElement('div', 'catalog_grid', null)
content.appendChild(catalog);


for (const [nameCategory, arrayProducts] of Object.entries(data)) {
    const categoryTitle = createHtmlElement('span', null, 'category_title');
    const category = createHtmlElement('ul', nameCategory, 'category_products');
    categoryTitle.innerHTML = nameCategory;
    catalog.appendChild(categoryTitle);
    catalog.appendChild(category);
    for(const product of arrayProducts){
        const card = createHtmlElement('li', product.title, null);
        category.appendChild(card);
    }
}

export default content;