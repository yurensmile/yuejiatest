import * as React from 'react';
import * as style from './index.scss';
interface Props {
  funcName: string[];
  name: string;
  profession: string;
  tel: string;
}
interface State {
}

class Contact extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
  }

  public render(): JSX.Element {
    const { funcName, name, profession, tel } = this.props;
    console.log(funcName);
    return (
      <div className={style.component}>

        <section className={style.func}>
          <ul>
            <li><i className={style.icon1}/><span>空中看房</span></li>
            <li><i className={style.icon1}/><span>VR看房</span></li>
            <li><i className={style.icon1}/><span>房贷计算器</span></li>
            <li><i className={style.icon1}/><span>专属服务</span></li>
          </ul>
        </section>

        <div className="contact">
          <div className="info">
              <dl>
                <dt>
                  <img style={{width:"100px"}} src="/src/assets/img/peo.png" alt=""/>
                  <strong>{name}</strong><span>{profession}</span>
                  <span>{tel}</span>
                </dt>
                <dt>楼盘价格优惠，请联系我</dt>
              </dl>
          </div>

          <div className="qrcode">
              <img src="/src/assets/img/qrcode.png" alt=""/>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
