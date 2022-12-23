/*
  this file has been heavily pruned... lots of stuff commented out/delete
  and just left remnants of original code for error reproduction
 */
export const commonFields = {
  primaryUUID: (options?: any) => {
    return {
      defaultValue: true,
      primaryKey: true,
      ...options,
    };
  },
  UUID: (options?: any) => {
    return {
      ...options,
    };
  },
  tenantId: (options?: any) => {
    return {
      allowNull: false,
      ...options,
    };
  },
  primaryInt: (options?: any) => {
    return {
      autoIncrement: true,
      primaryKey: true,
      ...options,
    };
  },
  userId: (options?: any) => {
    return {
      ...options,
    };
  },
  boolean: (defaultValue = true, options?: any) => {
    return {
      allowNull: false,
      defaultValue,
      ...options,
    };
  },
  string: (length: number, defaultValue: string = null, options?: any) => {
    const obj: any = {
    };
    if (defaultValue) obj.defaultValue = defaultValue;
    return { ...obj, ...options };
  },
  active: (options?: any) => {
    return {
      allowNull: false,
      ...options,
    };
  },
  roleId: (options?: any) => {
    return {
      ...{
        allowNull: false,
      },
      ...options,
    };
  },

  email: (options?: any) => {
    return {
      ...{
      },
      ...options,
    };
  },
  otherType: <T>(values:T[], defaultValue?: T, allowNull = false) => {
    return {
      values,
      defaultValue,
      allowNull,
    };
  },
}

// API
const neverInclude = [];
const neverFind = [
  'somevalue',
  'somevalue',
];
const neverUpdate = [
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
  'somevalue',
];


// store valid fields for find/update from our db models...
const modelDef: {
  loaded: boolean;
  rawAttributes: any;
  primary: any;
  find: any;
  update: any;
  type: any;
  include: any;
  queryAttrs: {
    defaults?: any[];
    always?: any[];
    omit?: any[];
  },
} = {
  loaded: false,
  rawAttributes: {},
  primary: {},
  find: {},
  update: {},
  type: {},
  include: {},
  queryAttrs: {},
};


export function restNeverInclude(modelName: any) {
  // neverInclude = [...new Set([...neverInclude, modelName])];
}
export function restSetQueryAttr<M = any>(modelName: any, type: 'omit' | 'defaults' | 'always', values: (keyof M)[]) {
  const wtf = restNeverInclude('user');
  // modelDef.queryAttrs[modelName] = modelDef.queryAttrs[modelName] ?? {};
  // modelDef.queryAttrs[modelName][type] = values;
}

export function storeValidFields(sequelizeModels) {

  if(modelDef.loaded) return;

  modelDef.loaded = true;
}

export function getFieldType(modelName: any, field: string) {
  return modelDef.type[modelName][field];
}
export function getPrimaryFieldFor(modelName: any) {
  return modelDef.primary[modelName];
}

export function getValidFieldsForFind<M = any>(modelName: any, requestedFields:(keyof M)[] = [], defaults:(keyof M)[] = [], omit: (keyof M)[] = []): (keyof M)[] { // (Extract<keyof M, string>)[] => {
  return returnValidFields(modelName, 'find', requestedFields, defaults, omit);
}

export function getValidFieldsForUpdate<M=any>(modelName: any, requestedFields:(keyof M)[] = [], omit:(keyof M)[] = []): (keyof M)[] {
  return returnValidFields(modelName, 'update', requestedFields, [], omit);
}

export function getValidIncludes(parentModelName: any, requestedIncludes: (any)[]) {

  const modelIncludes = modelDef.include[parentModelName];
  if(!modelIncludes) return [];

  return requestedIncludes;
}



export const returnValidFields = <M = any>(modelName: any, type: 'find' | 'update', requestedFields: (keyof M)[] = [], defaults: (keyof M)[] = [], omit: (keyof M)[] = []): (keyof M)[] => {

  const cantHoverOverThis = 'Everything is white?!';
  debugger; // TODO: feature

  if (!modelDef.find[modelName]) throw new Error(`returnValidFields - Invalid Model: [${modelName}]`);

  let allAttrs: (keyof M)[];
  let always: (keyof M)[];

  switch (type) {
    case 'update':
      allAttrs = modelDef.update[modelName] as (keyof M)[];
      defaults = []; // nope
      always = []; // nope
      break;
    case 'find':
      allAttrs = modelDef.find[modelName] as (keyof M)[];
      // set defaults
      defaults = defaults?.length ? defaults
        : modelDef.queryAttrs[modelName]?.defaults ? modelDef.queryAttrs[modelName].defaults
        : [];
      // force attr?
      always = modelDef.queryAttrs[modelName]?.always ? modelDef.queryAttrs[modelName].always : []
      break;
  }

  // does model have an always omit flag on a field?
  if (modelDef.queryAttrs[modelName]?.omit) {
    omit = [...omit, ...modelDef.queryAttrs[modelName].omit];
  }

  return requestedFields;
}

// some models have 'as' names... this returns underlying model...
export function resolveModelName(modelName: any, modelAs?: any): { model: any, as: any } {

  let result = { model: modelName, as: modelName };

  if (modelAs && modelDef.include[modelName] && modelDef.include[modelName][modelAs]) {
    result = {
      model: modelName,
      as: (modelDef.include[modelName][modelAs] as any),
    }
  }

  return result as { model: any, as: any }
}

