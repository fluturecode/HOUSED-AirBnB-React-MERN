if (process.env.NODE_ENV !== 'production') require ('dotenv').config();

require('./mongoose');

const Listing = require('../models/listings'),

const dbReset = async () => {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany();
    }

const listing = new Listing({

            firstName:"Juliet",
            title:"Historic Spanish home in gated neighborhood",
            description:"Conveniently located in the heart of Coral Gables, we invite you to stay in our gorgeous historic home",
            address:"3367 King's Landing Dr",
            city:"Coral Gables",
            State:"Florida",
            zipCode:"33175",
            images:"url",
            price:"$150 a night or babysit our kids twice a week after school",
    
  
            
});

await listing.save();   

dbReset();

}