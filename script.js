const contacts = [
  {
    id: 1,
    name: "Alexandro Carlos",
    age: 30,
    email: "alexandrocarlos@gmail.com",
    phone: "+6281210550085",
    address: "Jakarta",
    country: "Indonesia",
  },
  {
    id: 2,
    name: "Minato",
    age: 50,
    email: "minato@gmail.com",
    phone: "+81210550085",
    address: "Osaka",
    country: "Japan",
  },
  {
    id: 3,
    name: "Rico Puji",
    age: 33,
    email: "ricopuji@gmail.com",
    phone: "+319742640382",
    address: "Cibubur",
    country: "Jakarta",
  },
];

function displayContacts() {
  contacts.forEach((contact) => {
    console.log(`
      ID: ${contact.id}
      Name: ${contact.name}
      Age: ${contact.age} years old
      Email: ${contact.email}
      Address: ${contact.address}
      Phone: ${contact.phone}
      Country: ${contact.country}
      `);
  });
}

function addContact(name, age, email, phone, address, country) {
  const lastContact = contacts[contacts.length - 1];
  const lastId = lastContact.id;
  const nextId = lastId + 1;

  const newContact = {
    id: nextId,
    name,
    age,
    email,
    phone,
    address,
    country,
  };

  contacts.push(newContact);
}

function searchContacts() {
  // TODO: Use filter
}

addContact(
  "Siregar",
  30,
  "siregar@gmail.com",
  "Jakarta",
  "+628122066789",
  "Indonesia"
);
addContact(
  "Muhammad Raihan",
  21,
  "m.raihan@gmail.com",
  "Banda Aceh",
  "+62232244",
  "Indonesia"
);

displayContacts();
