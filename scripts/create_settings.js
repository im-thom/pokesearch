// Algolia search library
const algoliasearch = require("algoliasearch");

const search = algoliasearch("X55AEDZ16K", "5fdc1319e2a1dd071775c965eb492c21");

const index = search.initIndex("pokemon");

const setSettings = async () => {
  try {
    await index.setSettings({
      searchableAttributes: [
        "name",
        "num",
        "unordered(type)",
        "unordered(weaknesses)"
      ],
      attributesToHighlight: ["name", "num", "type", "weaknesses"],
      highlightPreTag: '<strong>',
      highlightPostTag: '</strong>'
    });
    return;
  } catch (err) {
    console.log(err);
    return;
  }
};

setSettings();
