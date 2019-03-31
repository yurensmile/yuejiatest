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
        <div className={style.background}>
          <ImgView completeView="/src/assets/img/building.png" style={{width: "375px", height:"375px"}}/>
          <div className={style.buildingInfo}>
            <h1>保利江上明珠</h1>
            <span className="{style.tag}">高端住宅</span>
            <span className="{style.tag}">品牌房企</span>
            <span className="{style.tag}">央企物业</span>
            <span className="{style.tag}">景观房</span>
            <p><span>楼盘地址：</span><span>重庆市/九龙波区/保利江上明珠售楼中心</span></p>
          </div>
        </div>


        <section className="{style.func}">
          <ul>
          </ul>
        </section>

        <div className="{style.contact}">
          <div className="{style.info}">
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
