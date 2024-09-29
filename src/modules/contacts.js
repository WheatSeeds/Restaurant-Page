import '../styles/contact.css'
import createHtmlElement from './renderElems';

const contactPageInfoData = [
    {title: `Contact Us!`, description: `Have questions or want to place an order? 
    Reach out to us via email or on social media. We're excited to assist you!`},
    {title: 'Email', description: `georg23kuz@gmail.com` },
    {title: 'Socials', description: `Nothing`},
]

function createContactsPageInfo(){
    const contactPageInfo = createHtmlElement('div', 'contact_page_info', 'contact_page_block');
    
    contactPageInfoData.forEach((e) => {
        contactPageInfo.innerHTML += `
            <div class='contact_page_info_block'>
                <span class = 'contact_page_title'>${e.title}</span>
                <span class = 'contact_page_info_desc'>${e.description}</span>
            </div>
        `;
    });
    return contactPageInfo;
};

function createContactsPageForm(){
    const contactPageForm = createHtmlElement('form', 'contact_page_form', 'contact_page_block');
    const contactPageFormTitle = createHtmlElement('span', null, 'contact_page_title');
    contactPageFormTitle.innerHTML = 'Send Message ';
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
    return contactPageForm;
};

function contactsPage(){
    const contactPage = createHtmlElement('main', 'contact_page', null);
    const contactPageContent = createHtmlElement('div', 'contact_page_content', null);
    contactPage.appendChild(contactPageContent);
    contactPageContent.appendChild(createContactsPageInfo());
    contactPageContent.appendChild(createContactsPageForm());

    document.body.appendChild(contactPage);
};

export default contactsPage;