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
    categoryTitle.innerHTML = nameCategory;
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
    const productImgWrap = createHtmlElement('div', null, 'product_image_wrap');
    const productImg = createHtmlElement('img', null, 'productImage')
    const productTitle = createHtmlElement('span', null, 'productTitle');
    const productPrice = createHtmlElement('span', null, 'productPrice');

    productImg.src = images[product.photo];
    productTitle.innerHTML = product.title;
    productPrice.innerHTML = `Price: ${product.price}`;     

    productImgWrap.appendChild(productImg);
    productCard.appendChild(productImgWrap);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);

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