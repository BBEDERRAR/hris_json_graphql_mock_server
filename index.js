import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server/node';
import data from './db.js';

const PORT = 3000;
const app = express();

app.use('/graphql', jsonGraphqlExpress(data));

app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
}); 