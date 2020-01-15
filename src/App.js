import React from "react";
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  Hits,
  ClearRefinements,
  Configure,
  Pagination,
  CurrentRefinements,
  NumericMenu,
  Highlight
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "X55AEDZ16K",
  "1c3d24863ec3c1851b13bc947d238fd4"
);

const CustomHit = ({ hit }) => (
  <div key={hit.objectID} className="hit-item">
    <div className="hit-image-container">
      <img className="hit-image" src={hit.img} alt={hit.name} />
    </div>
    <div className="hit-content-container">
      <div>
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>
          #<Highlight attribute="num" hit={hit} />{" "}
        </span>
        <Highlight attribute="name" hit={hit} />
        <span className="types">
          {hit.type.map((type, i) => (
            <span key={i} className={`${type.toLowerCase()} pill`}>
              <Highlight attribute={`type[${i}]`} hit={hit} />
            </span>
          ))}
        </span>
      </div>
      <div className="stats">
        <b>Height:</b> {hit.height}m
      </div>
      <div className="stats">
        <b>Weight:</b> {hit.weight}kg
      </div>
      <div className="weaknesses">
        <div>
          <b>Weaknesses:</b>
        </div>
        {hit.weaknesses.map((weakness, i) => (
          <span key={i} className={`${weakness.toLowerCase()} pill`}>
            <Highlight attribute={`weaknesses[${i}]`} hit={hit} />
          </span>
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <main>
      <InstantSearch searchClient={searchClient} indexName="pokemon">
        <div className="header">
          <div style={{display: "block"}}>
            <h1 style={{ color: "#FFCC03"}}>PokéSearch</h1>
          </div>
          <div style={{display: "block", marginBottom: "20px"}}>
          <SearchBox
            placeholder={"Start typing to search for Pokemon..."}
            className="custom-search-container"
            autoFocus
          />
          </div>
        </div>
        <div className="container">
          <Configure hitsPerPage={8} />
          <div className="search-header"></div>
          <div className="left-column">
            <ClearRefinements />
            Filter by Type:
            <RefinementList attribute="type" />
            Filter by Weakness:
            <RefinementList attribute="weaknesses" />
            {/* <NumericMenu at /> */}
          </div>
          <div className="right-column">
            <CurrentRefinements />
            <Hits hitComponent={CustomHit} />
            <Pagination />
          </div>
          {/* <div className="center">container</div> */}
        </div>
      </InstantSearch>
    </main>
  );
};

export default App;
