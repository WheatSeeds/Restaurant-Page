import data from '../menuData.json'
import createHtmlElement from './render';
import '../styles/content.css'

const content = document.createElement('main');
const catalog = createHtmlElement('div', 'catalog_grid', null)
content.appendChild(catalog);


for (const [nameCategory, arrayProducts] of Object.entries(data)) {
    const category = createHtmlElement('div', nameCategory, 'category');
    const categoryTitle = createHtmlElement('h1', null, 'category_title');
    categoryTitle.innerHTML = nameCategory;
    const categoryProduct = createHtmlElement('ul', null, 'category_products');

    catalog.appendChild(category)
    category.appendChild(categoryTitle);
    category.appendChild(categoryProduct);

    for(const product of arrayProducts){
        const card = createHtmlElement('li', product.title, 'product');
        const cardImg = createHtmlElement('div', null, 'productImg');
        const productImg = createHtmlElement('img', null, 'productImage')
        const cardTitle = createHtmlElement('span', null, 'productTitle');
        const cardPrice = createHtmlElement('span', null, 'productPrice');

        productImg.src = 'src/Img/product photo/Vodka.jpg';
        cardTitle.innerHTML = product.title;
        cardPrice.innerHTML = product.price;
        

        card.appendChild(cardImg);
        cardImg.appendChild(productImg);
        card.appendChild(cardTitle);
        card.appendChild(cardPrice);

        categoryProduct.appendChild(card);
    }
}

export default content;