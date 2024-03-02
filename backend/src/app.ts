import bodyParser = require("body-parser");
import compression = require("compression");
import cors = require("cors");
import dotenv = require("dotenv");
import express = require("express");
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import helmet = require("helmet");
import mongoose from "mongoose";
import * as jwt from 'jsonwebtoken';

import {welcomeQuery} from "./graphiQL_welcome_query";
import {schema} from "./schema";
import { AuthenticationError } from "apollo-server";
import 'dotenv/config';

dotenv.config({ path: "../.env" });

// @ts-ignore
mongoose.connect(process.env.MONGODB_URI).then(()=> {
  console.log("Connected to MongoDB");
}).catch((error: any) => {
  console.error(error);
});

const app: express.Application = express();

const helperMiddleware: express.RequestHandler[] = [
  cors({
    methods: ["POST"],
  }),
  bodyParser.json(),
  bodyParser.text({ type: "application/graphql" }),
  (req: express.Request, res: express.Response, next: any) => {
      if (req.is("application/graphql")) {
          req.body = { query: req.body };
      }
      next();
  },
];
app.use(helmet());
app.use(compression());
app.use("/graphql", ...helperMiddleware, graphqlExpress({ schema }));

if (!process.env.PRODUCTION) {
  app.use("/graphiql", graphiqlExpress({
    endpointURL: "/graphql",
    query: welcomeQuery,
  }));
}

export default app;
