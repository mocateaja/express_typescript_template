/* 
  Express Typescript Template

  Hello, this is an express js template with typescript.
  I made it for those of you who want to practice more productively. 
  This template is not entirely perfect so it is not recommended to create a real production class.

  I hope this is useful thank you
*/

import express, { Request, Response } from 'express';
import fs from 'fs';
import { secureRouter, wrapResponse } from "./utils/utility";

const app = express();

const configFile = fs.readFileSync('server.config', 'utf8');
const config = JSON.parse(configFile);
const port = config.port;

app.get('/', async (req: Request, res: Response) => {
  const wrappedRes = wrapResponse(res);

  await secureRouter(req, res)
  wrappedRes.send('Hello World');
});

app.listen(port, async () => {
  console.log(`Server started at localhost port:${port}`);
});
