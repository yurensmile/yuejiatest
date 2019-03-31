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
    console.log(name);
    console.log(profession);
    console.log(tel);
    return (
      <div className={style.component}>
      {/* 这是头部部分的 */}
        <div className={style.background}>
          <ImgView completeView="/src/assets/img/building.png" style={{width: "375px", height:"375px"}}/>
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

        </div>

        <div className={style.func}>
            <dl>
              <dt><span className={style.icon1}></span><br/><span>空中看房</span></dt>
              <dt><span className={style.icon2}></span><br/><span>VR看房</span></dt>
              <dt><span className={style.icon3}></span><br/><span>房贷计算器</span></dt>
              <dt><span className={style.icon4}></span><br/><span>专属服务</span></dt>
            </dl>
        </div>

        {/* 联系人*/}
        <div className={style.footer}>
          <div className={style.contact}>
            <div className={style.people}>
              <img src="/src/assets/img/peo.png" 
                style={{width:"66px", height:"66px",display:"inline-block",borderRadius:"50%",verticalAlign:"middle",
              float:"left"}}
              />
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
                style={{width:"82px",height:"111px"}}
              />
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
