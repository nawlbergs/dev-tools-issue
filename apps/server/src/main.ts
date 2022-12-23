import { app } from './app/app';
try{
  app.listen(3333, () => {
    console.log('====================================');
    console.log('====>  http://localhost:3333');
    console.log('====>  open chrome dev tools. on my machine the debugger falls apart inside the model-utils.ts file');
    console.log('====>  you cant hover over the variables, and all the code is white');
    console.log('====>  this happened to other files as well... but i delete/removed everything in project to make it easier to reproduce');
    console.log('====================================');
  });
} catch(err) {
  console.log(err);
}
