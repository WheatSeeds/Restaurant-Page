import data from '../menuData.json'
import createHtmlElement from './renderElems';
import '../styles/menu.css';

function importAllImages(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

function createProductCategory(nameCategory, arrayProducts){
    const category = createHtmlElement('div', nameCategory, 'category');
    const categoryTitle = createHtmlElement('span', null, 'category_title');
    categoryTitle.textContent = nameCategory;
    const categoryProducts = createHtmlElement('ul', null, 'category_products');
    category.appendChild(categoryTitle);
    category.appendChild(categoryProducts);
    for(const product of arrayProducts){
        categoryProducts.appendChild(createProductCard(product));
    }
    return category;
}

function createProductCard(product){
    const images = importAllImages(require.context('../Img/product photo/', false, /\.(png|jpe?g|svg)$/));

    const productCard = createHtmlElement('li', product.title, 'product');

    productCard.innerHTML = `
        <img src='${images[product.photo]}' alt = '' class='product_img'>
        <span class='product_title'>${product.title}</span>
        <span class='product_title'>Price: ${product.price}</span>
    `;

    return productCard;
}
function menuPage(){
    const menuContent = document.createElement('main');
    const catalog = createHtmlElement('div', 'catalog_grid', null);

    menuContent.appendChild(catalog);

    for (const [nameCategory, arrayProducts] of Object.entries(data)) {
        catalog.appendChild(createProductCategory(nameCategory, arrayProducts));
    }

    document.body.appendChild(menuContent);
}

export default menuPage;