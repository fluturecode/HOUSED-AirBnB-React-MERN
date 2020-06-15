const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const _ = require('lodash');

// Connection URL
const url = 'mongodb://127.0.0.1:27017/final';

// Database Name

const dbName = 'listings';

// use connect method to connect to the server

MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);

  const db = client.db(dbName);

  // get access to the relevant collections

  const listingsCollection = db.collection('listings');

  //   Are we building a usersCollection? If so we will start with the line below.
  //   const usersCollection = db.collection('users');

  // make a bunch of listings

  let users = [];
  for (let i = 0; i < 10; i += 1) {
    const title = faker.name.title();
    const description = faker.commerce.productMaterial();
    const streetAddress = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.state();
    const zipCode = faker.address.zipCode();
    const image = faker.image.abstract();
    const price = faker.commerce.price();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const bookingId = faker.random.number();

    let newListing = {
      title,
      description,
      streetAddress,
      city,
      state,
      zipCode,
      image,
      price,
      firstName,
      lastName,
      bookingId
    };
    listings.push(newListing);

    console.log(newlisting);
  }
  listingsCollection.insertMany(listings);
  console.log('Database seeded!');
  client.close();
});
