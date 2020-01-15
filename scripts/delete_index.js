// Algolia search library
const algoliasearch = require("algoliasearch");


// Setup client
const client = algoliasearch("X55AEDZ16K", "5fdc1319e2a1dd071775c965eb492c21");

client.deleteIndex("pokemon")