import * as React from 'react';
import * as style from './index.scss';
import ImgView from 'yuejia/component/ImgView';

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
          {/* <dl><dt>thisi</dt><dd>{funcName[0]}</dd></dl>
          <dl><dt>thisi</dt><dd>{funcName[1]}</dd></dl>
          <dl><dt>thisi</dt><dd>{funcName[2]}</dd></dl>
          <dl><dt>thisi</dt><dd>{funcName[3]}</dd></dl> */}
          <img src="src/assets/img/look.png" alt="空中看房"/>
          <img src="src/assets/img/VR.png" alt="VR看房"/>
          <img src="src/assets/img/calc.png" alt="房贷计算器"/>
          <img src="src/assets/img/service.png" alt="专属服务"/>
          <ImgView completeView="src/assets/img/service.png"/>
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
