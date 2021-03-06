// Import dogs from JSON File
const data = require('../data/breeds.json');

// Lodash library for batch uploads
const _ = require("lodash");

// Allows us to get environment variables to hide API keys
require('dotenv').config();

// Algolia search library
const algoliasearch = require("algoliasearch");

// Obfuscate admin key using environment variable
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;

// Setup client
const client = algoliasearch("X55AEDZ16K", ALGOLIA_ADMIN_KEY);

// Initiate project
const index = client.initIndex("dogs");


// Helper function that runs a standard data upload
const standard_upload = async (data) => {
    try {
        console.log("Starting standard upload...")
        // Upload all records to Algolia
        const results = await index.addObjects(data);
        console.log(`Standard upload with ${results.length} records.`)
    } catch(err) {
        return console.log(err)
    }
}

// Helper function that runs a batched data upload
const batch_upload = async (data) => {
    try {
        console.log("Starting batch upload...")
        // Break down data into chunks of 1000
        const chunks = _.chunk(data, 1000);
        // Upload each chunk of 1000 records 1 at a time.
        chunks.forEach(chunk => index.addObjects(chunk))
        return console.log(`There were ${chunks.length} chunks...`)
    } catch(err) {
        return console.log(err)
    }
}


// Check if there is over 1000 records
if(data.length < 1000) {
    // If there is less than 1000 records do a standard data upload
    standard_upload(data);
    return
} else {
    // If there is more, batch data is chunks of 1000
    batch_upload(data);
    return
}