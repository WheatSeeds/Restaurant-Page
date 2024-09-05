function createHtmlElement(type, idValue, classValue){
    const element = document.createElement(type);
    element.setAttribute("id", idValue);
    element.setAttribute("class", classValue);
    return element;
}

export default createHtmlElement;