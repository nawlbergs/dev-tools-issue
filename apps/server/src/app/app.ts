import * as express from 'express';
import { returnValidFields } from './model-utils';


const app = express();

app.get('/', async (req, res, next) => {
  try {
    returnValidFields('user', 'find', ['id', 'name', 'email', 'createdAt', 'updatedAt']);
    res.send('Hello World!');
  } catch (err) {
    next(err);
  }
})

app.use((err: any, req: any, res: any, next) => {
  debugger; // leave me here..
  res.send('Run chrome debugger to see issues with code. There is a debugger breakpoint in in model-utils.ts file which shows has the issue.');
});

export {
  app,
}
