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
// מערך אנשי קשר כולל כל הפרטים
const contacts = [
    {
        name: "John Smith",
        phone: "050-1234567",
        image: "./images/John_Smith.jpg",
        email: "john.smith@gmail.com",
        address: "Tel Aviv"
    },
    {
        name: "Emily Johnson",
        phone: "051-2345678",
        image: "./images/Emily_Johnson.jpg",
        email: "emily.johnson@gmail.com",
        address: "Haifa"
    },
    {
        name: "Michael Levy",
        phone: "050-7894561",
        image: "./images/Michael_Levy.jpg",
        email: "michael.levy@gmail.com",
        address: "Jerusalem"
    },
    {
        name: "Noly Jeris",
        phone: "054-7654112",
        image: "./images/Noly_jeris.jpg",
        email: "noly.jeris@gmail.com",
        address: "Ramat Gan"
    }
];

// הצגת אנשי קשר
const contactList = document.querySelector('.contact-list');
function renderContacts() {
    contactList.innerHTML = "";
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.classList.add('contact');
        li.innerHTML = `
            <img src="${contact.image}" alt="Picture of ${contact.name}" />
            <div class="contact-show">
                <h3>${contact.name} <span>${contact.phone}</span></h3>
            </div>
            <div class="contact-buttons">
                <button class="info-btn" title="Info" data-index="${index}">
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

    // מאזין לכפתורי מידע
    document.querySelectorAll('.info-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.currentTarget.dataset.index;
            showPopup(contacts[index]);
        });
    });
}
// הצגת פופאפ עם פרטי איש קשר
function showPopup(contact) {
    document.querySelector('.popup-name').textContent = `Name: ${contact.name}`;
    document.querySelector('.popup-phone').textContent = `Phone: ${contact.phone}`;
    document.querySelector('.popup-email').textContent = `Email: ${contact.email}`;
    document.querySelector('.popup-address').textContent = `Address: ${contact.address}`;
    document.querySelector('.popup-overlay').classList.add('show');
}

document.querySelector('.popup-close-btn').addEventListener('click', () => {
    document.querySelector('.popup-overlay').classList.remove('show');
});

document.querySelector('.popup-overlay').addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-overlay')) {
        document.querySelector('.popup-overlay').classList.remove('show');
    }
});
// הרצת הצגת הקשר עם טעינת הדף
document.addEventListener('DOMContentLoaded', renderContacts);