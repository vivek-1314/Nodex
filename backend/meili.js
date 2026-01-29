const { MeiliSearch } = require("meilisearch");
require("dotenv").config();

const client = new MeiliSearch({
  host: "https://ms-646e311edd98-39404.fra.meilisearch.io", 
  apiKey: process.env.MEILI_MASTER_KEY, 
});

const userIndex = client.index("nodex"); 

module.exports = userIndex;
