import dotenv = require("dotenv");
import app from "./app";

dotenv.config();

// const PORT: string | undefined = process.env.PORT;
const PORT = 4000;

app.listen(PORT, () => {
  /*tslint:disable no-console*/
  console.log(
    `GraphQL Server is now running on http://localhost:${PORT}/graphql`
  );
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
});
