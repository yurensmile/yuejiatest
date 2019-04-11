import * as React from 'react';
import * as style from './index.scss';
import IconText from 'yuejia/component/IconText';
import ImgView from 'yuejia/component/ImgView';

interface Props {
}

const Con = (props: Props) => {
  return (
    <div className={style.component}>
      <div className={style.back}>
        <div className={style.info}>
          <div className={style.buildName}>保利江上明珠</div>
          <div>
            <span className={style.buildTag}>高端发窝</span>
            <span className={style.buildTag}>高端发的</span>
            <span className={style.buildTag}>高端发法</span>
            <span className={style.buildTag}>高端发法</span>
          </div>
          <div className={style.position}>
            楼盘地址：重庆市 / 九龙坡区/ 保利江上明珠售楼中心
          </div>
          <div className={style.price}>
              <div>
                <p className={style.name}>均 价</p>
                <p className={style.num}>18500元/m2</p> 
              </div>
              <div>
                <p className={style.name}>均 价</p>
                <p className={style.num}>59.666万/m2</p> 
              </div>
              <div>
                <p className={style.name}>均 价</p>
                <p className={style.num}>18500元/m2</p> 
              </div>
          </div>
        </div>
      </div>

      <div className={style.cont}>
        <div className={style.func}>
          <div className={style.wrapper}>
            <div className={style.iconWrapper}>
              <IconText
                src="/src/assets/img/air-look.png"
                text="空中看房"
                flexDirection="column"
                iconCls={style.icon}
                textCls={style.text}
              />
              <IconText
                src="/src/assets/img/air-look.png"
                iconCls={style.icon}
                flexDirection="column"
                textCls={style.text}
                text="空中看房"
              />
              <IconText
                src="/src/assets/img/air-look.png"
                text="空中看房"
                flexDirection="column"
                textCls={style.text}
                iconCls={style.icon}
              />
              <IconText
                src="/src/assets/img/air-look.png"
                textCls={style.text}
                iconCls={style.icon}
                flexDirection="column"
                text="空中看房"
              />
            </div>
          </div>
        </div>
        <div className={style.peo}>
          <div className={style.peoInfo}>
            <div className={style.peoDes}>
              <ImgView
                className={style.peoImg}
                completeView="/src/assets/img/peo.png"
              />
              <div>
                <div>
                  <span className={style.peoName}>张美玲</span>
                  <span>置业顾问</span>
                </div>
                <div>138 9889 8743</div>
                </div>
            </div>
            <div className={style.qrCode}>
              
            </div>
          </div>
          <div className={style.footer}>
            <div className={style.footer1}>楼盘价格优惠，请联系我！</div>
            <div className={style.footer2}>长按识别二维码</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Con;
