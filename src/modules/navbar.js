const navbar = document.createElement('nav');
const nav_options = [
    {Name: 'Menu', id: 'menu'},
    {Name: 'About us', id: 'about'},
    {Name: 'Contacts', id: 'contacts'},
];

nav_options.forEach((item) => {
    const option = document.createElement('button');
    navbar.appendChild(option);
    option.setAttribute('id', item.id);
}
);
export default navbar;