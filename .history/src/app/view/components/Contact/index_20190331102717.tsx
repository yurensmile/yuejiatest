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
        {/*  下部分的，包含功能和联系人*/}
        <div className={style.footer}>
          <div className={style.func}>
            <dl>
              <dt><span>thii is</span><br/><span>really true</span></dt>
              <dt></dt>
              <dt></dt>
              <dt></dt>
            </dl>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
