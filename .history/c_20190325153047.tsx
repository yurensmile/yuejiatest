export type BaseValue = number | string | boolean | Date | any[] | ((...args: any[]) => any) | Map<any, any>;
export type ReadOnly<T> = T extends BaseValue ? T : {
  readonly [P in keyof T]: ReadOnly<T[P]>;
}

export interface Props<Value>{
  request?: Request;
  defaultValue?: Value;
}