// Algolia search library
const algoliasearch = require("algoliasearch");

const search = algoliasearch("X55AEDZ16K", "5fdc1319e2a1dd071775c965eb492c21");

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
