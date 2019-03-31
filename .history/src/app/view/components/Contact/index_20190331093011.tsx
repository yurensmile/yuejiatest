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
        <ImgView completeView="/src/assets/img/building.png" style={{width: "375px"}}/>


        <section className={style.func}>
          <ul>
            <li><i className={style.icon1}/></li>
            <li><i className={style.icon2}/></li>
            <li><i className={style.icon3}/></li>
            <li><i className={style.icon4}/></li>
          </ul>
        </section>

        <div className={style.contact}>
          <div className={style.info}>
              <dl>
                <dt>
                  <img src="" alt=""/>
                  <strong>{name}&nbsp;&nbsp;</strong><span>{profession}</span>
                  <br/>
                  <span>{tel}</span>
                </dt>
                <dt>楼盘价格优惠，请联系我</dt>
              </dl>
          </div>

          <div className="qrcode">
              <img src="" alt=""/>
          </div>

        </div>
      </div>
    );
  }
}

export default Contact;
