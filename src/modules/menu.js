import data from '../menuData.json'
import createHtmlElement from './renderElems';
import '../styles/menu.css';
import image from '../Img/bgHome/bg_bat.png'
import animation from './animation';



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
        <span class='product_price'>Price: ${product.price}</span>
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

    const backgroundImages = createHtmlElement('div', 'bg_images', null);
    const backgroundImgOne = createHtmlElement('img', 'bg_bat_img_one', null);
    backgroundImgOne.src = image;
    const backgroundImgTwo = createHtmlElement('img', 'bg_bat_img_two', null);
    backgroundImgTwo.src = image; 
    backgroundImages.appendChild(backgroundImgOne);
    backgroundImages.appendChild(backgroundImgTwo);

    catalog.appendChild(backgroundImages);
    
    
    document.body.appendChild(menuContent);
    animation(backgroundImgOne, backgroundImgTwo);
}

export default menuPage;