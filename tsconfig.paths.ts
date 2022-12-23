// https://www.npmjs.com/package/module-alias
import * as path from 'path';
// import * as moduleAlias from 'module-alias';

const root = path.resolve(__dirname, '');

const aliases = {
  '@libs/af-angular':     `${root}/libs/af-angular/src/index.ts`,
  '@libs/af-core':        `${root}/libs/af-core/src/index.ts`,
  "@libs/af-theme":       `${root}/libs/af-theme/src/index.ts`,
  "@libs/material":       `${root}/libs/material/src/index.ts`,
  "@libs/lodash":         `${root}/libs/lodash/src/index.ts`,
}

// moduleAlias.addAliases(aliases);

export {
  // moduleAlias,
}
