#!/usr/bin/env node
import { readFileSync } from "fs";
import { program } from 'commander';
import _ from 'lodash';

import { IConfig, ITable } from "types";
import camelcase from 'camelcase';

program
  .version('1.0.0')

program.parse(process.argv)
const filename = program.args[0];
let config: IConfig;

try{
  const json = readFileSync(filename, "utf8");
  config = JSON.parse(json);
} catch(e) {
  console.error("Error while reading file,: ", e);
  process.exit(1);
}

const gatherColumnNames = (c: ITable) => {
  return [
    c?.select_permissions?.map(x=>x.permission.columns)??[],
    c?.update_permissions?.map(x=>x.permission.columns)??[]
  ].flat(2)
}

const getNewNames = (c:ITable)=>gatherColumnNames(c)
  .reduce(
    (accum, list)=>  (
      {
        [list]: camelcase(list),
        ...accum,
      }
    ),   c?.configuration?.custom_column_names??{})

for(let t of config!.tables ){
  console.log(JSON.stringify(t, null,2))
  console.log(JSON.stringify(gatherColumnNames(t), null,2))
  const newNames=getNewNames(t);
  console.log({newNames});
  if(newNames){
    _.set(t, 'configuration.custom_column_names', getNewNames(t))
  }
}

console.log(JSON.stringify(config!,null,2))
