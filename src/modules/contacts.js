import '../styles/contact.css'
import createHtmlElement from './renderElems';

const contactPageInfoData = [
    {title: 'Contact Us!', description: `Have questions or want to place an order? 
    Reach out to us via email or on social media. We're excited to assist you!`},
    {title: 'Email', description: `georg23kuz@gmail.com` },
    {title: 'Socials', description: `Nothing`}
]

function contactsPage(){
    const contactPage = createHtmlElement('div', 'contact_page', null);

    const contactPageInfo = createHtmlElement('div', 'contact_page_info', null);
    contactPage.appendChild(contactPageInfo)
    
    contactPageInfoData.forEach((e) => {
        const Title = createHtmlElement('span', null, 'contact_page_title');
        const Desc = createHtmlElement('span', null, 'contact_page_info_desc');

        Title.innerHTML = e.title;
        Desc.innerHTML = e.description;

        contactPageInfo.appendChild(Title);
        contactPageInfo.appendChild(Desc);
    });

    const contactPageForm = createHtmlElement('form', 'contact_page_form', null);
    const contactPageFormTitle = createHtmlElement('span', null, 'contact_page_title');
    contactPageFormTitle.innerHTML = 'Send Message '
    contactPage.appendChild(contactPageForm);
    contactPageForm.appendChild(contactPageFormTitle);
    
    const inputs = [
        {type: 'text', placeholder: 'Name', id: 'contact_page_form_name'}, 
        {type: 'email', placeholder: 'Email', id: 'contact_page_form_email'}
    ];

    inputs.forEach((e) =>{
        const input = createHtmlElement('input', e.id, null);
        input.type = e.type;
        input.placeholder = e.placeholder;
        contactPageForm.appendChild(input);
    });

    const submitButton = createHtmlElement('button', 'submit_button', null);
    const textArea = createHtmlElement('textarea', 'contact_page_form_message', null);
    textArea.placeholder = 'Message';
    contactPageForm.appendChild(textArea);

    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    contactPageForm.appendChild(submitButton);

    document.body.appendChild(contactPage);
}
export default contactsPage;