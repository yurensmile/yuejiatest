import * as React from 'react';
import * as style from './index.scss';
import ImgView from 'yuejia/component/ImgView';
// import IconText from 'yuejia/_base/view/IconText';
interface Props {
  name: string;
  profession: string;
  tel: string;
}
interface State {
}


class Contact extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    this.handleTouchStart = this.handleTouchStart.bind(this);
  }
  public handleTouchStart(): void {
    console.log('touch start');
  }

  public render(): JSX.Element {
    const { name, profession, tel } = this.props;
    return (
      <div
        className={style.component}
        onTouchStart= {this.handleTouchStart}
      >
      {/* 这是头部部分的 */}
        <div className={style.background}>
          <ImgView
            className={style.buildingImg}
            completeView="/src/assets/img/building.png"
          />
          <div className={style.buildingInfo}>
            <h1>保利江上明珠</h1>
            <span className={style.tag}>高端住宅</span>
            <span className={style.tag}>品牌房企</span>
            <span className={style.tag}>央企物业</span>
            <span className={style.tag}>景观房</span>
            <p><span>楼盘地址：</span><span>重庆市/九龙波区/保利江上明珠售楼中心</span></p>
          </div>
        </div>

        <div className={style.buildingPrice}>
          <ImgView
            className={style.priceImg}
            completeView="/src/assets/img/back.png"
          />
            <dl>
              <dt><span className={style.buidlingT}>均价</span><br/>
                <span className={style.buildingN}>11111&nbsp;</span><span className={style.buildingU}>万m<sup>2</sup></span>
              </dt>
              <dt><span className={style.buidlingT}>占地面积</span><br/>
                <span className={style.buildingN}>11111&nbsp;</span><span className={style.buildingU}>万m<sup>2</sup></span>
              </dt>
              <dt><span className={style.buidlingT}>建筑面积</span><br/>
                <span className={style.buildingN}>11111&nbsp;</span><span className={style.buildingU}>万m<sup>2</sup></span>
              </dt>
            </dl>`
        </div>

        <div className={style.func}>
            <dl>
              <dt><span className={style.icon1}></span><br/><span style={{color: '#759dff'}}>空中看房</span></dt>
              <dt><span className={style.icon2}></span><br/><span style={{color: '#fcad15'}}>VR看房</span></dt>
              <dt><span className={style.icon3}></span><br/><span style={{color: '#74c665'}}>房贷计算器</span></dt>
              <dt><span className={style.icon4}></span><br/><span style={{color: '#fe6f6f'}}>专属服务</span></dt>
            </dl>
        </div>

        {/* 联系人*/}
        <div className={style.footer}>
          <div className={style.contact}>
            <div className={style.people}>
              <img src="/src/assets/img/peo.png"
                className={style.peoImg}
              />
              {/* <IconText
                icon="/src/assets/img/peo.png"
                iconCls={style.peoImg}
                text="hello world"
              /> */}
              <span className={style.info}>
                <strong>{name}</strong>&nbsp;
                <span className={style.profession}>{profession}</span><br/>
                <span className={style.tel}>{tel}</span>
              </span>
              <p>楼盘价格优惠，请联系我！</p>
            </div>

              <img
                className={style.qrcode}
                src="src/assets/img/qrcode.png"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
