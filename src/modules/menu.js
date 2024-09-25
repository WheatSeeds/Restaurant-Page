import data from '../menuData.json'
import createHtmlElement from './renderElems';
import '../styles/menu.css';

function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function menu(){
    const images = importAllImages(require.context('../Img/product photo/', false, /\.(png|jpe?g|svg)$/));
    const menuContent = document.createElement('main');
    const catalog = createHtmlElement('div', 'catalog_grid', null)
    menuContent.appendChild(catalog);
    
    for (const [nameCategory, arrayProducts] of Object.entries(data)) {
        const category = createHtmlElement('div', nameCategory, 'category');
        const categoryTitle = createHtmlElement('span', null, 'category_title');
        categoryTitle.innerHTML = nameCategory;

        const categoryProducts = createHtmlElement('ul', null, 'category_products');
        const line = createHtmlElement('div', null, 'line');
        
        catalog.appendChild(category)
        category.appendChild(categoryTitle);
        category.appendChild(categoryProducts);
    
        for(const product of arrayProducts){
            const productCard = createHtmlElement('li', product.title, 'product');
            const productImgWrap = createHtmlElement('div', null, 'product_image_wrap');
            const productImg = createHtmlElement('img', null, 'productImage')
            const productTitle = createHtmlElement('span', null, 'productTitle');
            const productPrice = createHtmlElement('span', null, 'productPrice');


            productImg.src = images[product.photo];
            productTitle.innerHTML = product.title;
            productPrice.innerHTML = product.price;
            
            productImgWrap.appendChild(productImg);

            productCard.appendChild(productImgWrap);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);
    
            categoryProducts.appendChild(productCard);
        }
    }
    document.body.appendChild(menuContent);
}


export default menu;