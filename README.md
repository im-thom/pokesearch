# Welcome to PokéSearch
PokéSearch is a simple serach interface where you can quench your knowledge for the original 151 Pokémon! PokéSearch helps you go from a trainer to a Pokémon Master. 

* Become a battle master by quickly searching any Pokémon's strength and weaknesses!
* Find Pokémon based on their name, number, type, weaknesses, height and weight!
* Imagery for visual recollection

## About the data

Data was sourced from https://github.com/jdorfman/awesome-json-datasets

## Formatting data for indexing

The original data came with a number of extra fields that were not relevant for the purposes of this project. The original JSON data can be found at /data/pokedex_original.json

To restructure the data I created a node script to run over the data, remove a selection, and update some other fields, then output the result to a new json file which can be found at /data/pokedex_clean.json

## Uploading Indices the right way

I wanted to familiarise myself with the development side of Algolia so I chose to upload my indices via the API. 

As recommended in Algolias best practices I created a data uploading script which checks the length of the imported dataset to check its length and will run either a standard upload or use lodash to batch uploads into chunks of 1000.

This script can be executed by running **npm run upload**

## Business Rules

Try searching for "Starter" or "Starter Pokemon"

## Future Improvements for Pokesearch
* Add pages for each pokemon with further details
* Make ammendments to data to allow users to search by pokemon number textually and numerically - e.g. making "041" and 41 equivalent.
* Add pokemon from other series
* Get additional data on each pokemon e.g. What region or area they are found etc.
* Optimise for mobile
* Implement a range slider for height and weight

## For developers

Running the project
1. Clone the project
2. Run **npm install** to install node package dependencies
3. Run **npm run start** to launch in local environment

For Algolia Data Scripts
1. Change .env_sample to .env and replace with your Algolia API key
2. Change imported JSON file to change data uploaded to Algolia


# Feedback about Algolia

