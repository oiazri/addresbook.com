const contacts = [
  {
    id: 1,
    name: "Alex Praroro",
    age: 30,
    email: "alexpraroro@gmail.com",
    phone: "+6281210550085",
    address: "indomaret",
    country: "konoha",
  },
  {
    id: 2,
    name: "susanto",
    age: 50,
    email: "susanto@gmail.com",
    phone: "+81210550085",
    address: "osaka",
    country: "japan",
  },
  {
    id: 3,
    name: "Muhammad Ronaldo",
    age: 39,
    email: "mronaldo@gmail.com",
    address: "cibubur",
    phone: "+319742640382",
    country: "argetntina",
  },
];

function listcontacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
 Name: ${contact.name}
 age: ${contact.age} year old
 Email: ${contact.email}
 address: ${contact.address}
 Phone: ${contact.phone}
 country: ${contact.country}
`);
  }
}

listcontacts();
