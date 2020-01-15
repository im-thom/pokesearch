// Algolia search library
const algoliasearch = require("algoliasearch");

// Allows us to get environment variables to hide API keys
require('dotenv').config();

// Obfuscate admin key using environment variable
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;

const search = algoliasearch("X55AEDZ16K", ALGOLIA_ADMIN_KEY);

const index = search.initIndex("pokemon");

const do_search = async() => {
  try {
    const result = await index.search("M");

    console.log(result.hits[0]._highlightResult.name.value)
    return

  } catch(error) {
    console.log(error)
    return
  }
}

do_search();

// const setSettings = async () => {
//   try {
//     await index.setSettings({
//       searchableAttributes: [
//         "name",
//         "num",
//         "unordered(type)",
//         "unordered(weaknesses)"
//       ],
//       attributesToHighlight: ["name", "num", "type", "weaknesses"],
//       highlightPreTag: '<strong>',
//       highlightPostTag: '</strong>'
//     });
//     return;
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// };

// setSettings();
