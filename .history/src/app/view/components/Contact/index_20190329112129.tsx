import * as React from 'react';
import * as style from './index.scss';

interface Props {
}
interface State {
  funcName: string[];
  name: string;
  profession: string;
  tel: string;
}

class Contact extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    state = {
      funcName: ['空中楼盘', 'VR看房', '房贷计算器', '专属服务'],
      name: '张美玲',
      profession: '置业顾问',
      tel: '138 9889 8743'
    };
  }

  public render(): JSX.Element {
    const { funcName, name, profession, tel } = this.state;
    return (
      <div className={style.component}>
        <div className="func">
          <dl>
            funcName.map((item, index) => {
              return (
                <dt></dt>
                <dd>{ item }</dd>
              )
            })
          </dl>
        </div>
      </div>
    );
  }
}

export default Contact;
