import data from '../menuData.json'
import createHtmlElement from './renderElems';
import '../styles/menu.css';
import image from '../Img/product photo/Beef Stroganoff.jpg'


function menu(){
    const menuContent = document.createElement('main');
    const catalog = createHtmlElement('div', 'catalog_grid', null)
    menuContent.appendChild(catalog);
    
    for (const [nameCategory, arrayProducts] of Object.entries(data)) {
        const category = createHtmlElement('div', nameCategory, 'category');
        const categoryTitle = createHtmlElement('h1', null, 'category_title');
        categoryTitle.innerHTML = nameCategory;

        const categoryProducts = createHtmlElement('ul', null, 'category_products');
    
        catalog.appendChild(category)
        category.appendChild(categoryTitle);
        category.appendChild(categoryProducts);
    
        for(const product of arrayProducts){
            const productCard = createHtmlElement('li', product.title, 'product');
            const productImgWrap = createHtmlElement('div', null, 'product_image_wrap');
            const productImg = createHtmlElement('img', null, 'productImage')
            const productTitle = createHtmlElement('span', null, 'productTitle');
            const productPrice = createHtmlElement('span', null, 'productPrice');
            productImg.src = image;
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