import data from '../menuData.json'
import createHtmlElement from './render';
import '../styles/content.css'

const content = document.createElement('main');
const catalog = createHtmlElement('div', 'catalog_grid', null)
content.appendChild(catalog);


for (const [nameCategory, arrayProducts] of Object.entries(data)) {
    const category = createHtmlElement('div', nameCategory, 'category');

    const categoryTitle = createHtmlElement('span', null, 'category_title');
    categoryTitle.innerHTML = nameCategory;
    
    const categoryProduct = createHtmlElement('ul', null, 'category_products');

    catalog.appendChild(category)
    category.appendChild(categoryTitle);
    category.appendChild(categoryProduct);


    for(const product of arrayProducts){
        const card = createHtmlElement('li', product.title, 'product');
        categoryProduct.appendChild(card);
    }
}

export default content;