// Algolia search library
const algoliasearch = require("algoliasearch");

// Allows us to get environment variables to hide API keys
require('dotenv').config();

const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY
// Setup client
const client = algoliasearch("X55AEDZ16K", ALGOLIA_ADMIN_KEY);

client.deleteIndex("dogs")