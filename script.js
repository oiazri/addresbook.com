const contacts = [
  {
    id: 1,
    name: "Alex Praroro",
    age: 30,
    email: "alexpraroro@gmail.com",
    phone: "+6281210550085",
    address: "Jakarta",
    country: "Indonesia",
  },
  {
    id: 2,
    name: "Susanto",
    age: 50,
    email: "susanto@gmail.com",
    phone: "+81210550085",
    address: "Osaka",
    country: "Japan",
  },
  {
    id: 3,
    name: "Muhammad Ronaldo",
    age: 39,
    email: "mronaldo@gmail.com",
    phone: "+319742640382",
    address: "Cibubur",
    country: "Argentina",
  },
];

function listContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
Name: ${contact.name}
Age: ${contact.age} year old
Email: ${contact.email}
Address: ${contact.address}
Phone: ${contact.phone}
Country: ${contact.country}
`);
  }
}

listContacts();
