import Request from '../request';
import Base, { ReadOnly, BaseValue } from '../../_base/datatype';
import isEmpty from '../../utils/isEmpty';
import { type } from 'os';
import { BaseValue, ReadOnly, ReadOnly } from 'yuejia/_base/datatype';
import Request from 'yuejia/app/request';

export type Value<T> = T extends BaseValue ? T : T | undefined;

interface Props<T> {
  request?: Request;
  defaultValue: Readonly<T>;
}

class ObObject<T> extends Base<T> {
  constructor(props: Props<T>) {
    super(props.request);
    this.value = props. defaultValue;
  }

  protected value: ReadOnly<T>;
  public set(value: ReadOnly<T>): void{
    this.value = value;
    if (this.request) {
      if (isEmpty(value)) {
        this.request.state.set('empty');
      } else {
        this.request.state.set('complete');
      }
    }

    this.updateDataId();
  }

  public get(): Readonly<T> {
    return this.value;
  }
}

export default ObObject;
