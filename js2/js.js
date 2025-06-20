const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About Us', href: '#aboutus' },
    { text: 'Contact Us', href: '#contactus' }
];
function generateMenu(items) {
    let html = '';
    menuItems.forEach(item => {
        html += `<li><a href="${item.href}">${item.text}</a></li>`;
    });
    return html;
}
//contact-List  פונקצייה חדשה להצגת מתוך מערך קיים
document.querySelector('.nav-links').innerHTML = generateMenu(menuItems);
const contacts = [
    {
        name: "John Smith",
        phone: "050-1234567",
        image: "./images/John_Smith.jpg"
    },
    {
        name: "Emily Johnson",
        phone: "051-2345678",
        image: "./images/Emily_Johnson.jpg"
    },
    {
        name: "Michael Levy",
        phone: "050-7894561",
        image: "./images/Michael_Levy.jpg"
    },
    {
        name: "Noly Jeris",
        phone: "054-7654112",
        image: "./images/Noly_jeris.jpg"
    }
];
const contactList = document.querySelector('.contact-list');
function renderContacts() {
    contactList.innerHTML = ""; // מנקה את הרשימה הקיימת
    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.classList.add('contact');
        li.innerHTML = `
      <img src="${contact.image}" alt="Picture of ${contact.name}" />
      <div class="contact-show">
          <h3>${contact.name} <span>${contact.phone}</span></h3>
      </div>
      <div class="contact-buttons">
          <button class="info-btn" title="Info">
              <img src="./images/info.png" alt="Info" />
          </button>
          <button class="edit-btn" title="Edit">
              <img src="./images/Edit.png" alt="Edit" />
          </button>
          <button class="delete-btn" title="Delete">
              <img src="./images/Delete.png" alt="Delete Contact" />
          </button>
      </div>
    `;
        contactList.appendChild(li);
    });
}
document.addEventListener('DOMContentLoaded', renderContacts);
  
  