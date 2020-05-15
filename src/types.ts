type IPermission = {
  "permission": {
    "columns": string[],
  }
}
export type ITable = {
  table: {
    schema: string,
    name: string,
  },
  "configuration": {
    "custom_column_names"?: {
      [k:string]: string,
    }
  },
  "select_permissions"?:  IPermission [],
  "update_permissions"?: IPermission [],

}

export type IConfig = {
  tables: ITable[];
}
