import * as React from 'react';
import * as style from './index.scss';
import BasePage, { PageProps } from 'yuejia/app/Page';
import Page from 'yuejia/component/Page';
import View from 'yuejia/component/View';
import { Context } from 'yuejia/component/Model';
import Contact from '../../components/Contact';
import * as html2canvas from 'html2canvas';

interface Match {
}
interface Props {
}
interface State {
  maskStyle: object;
}

const Complete = View.Complete;
const Empty = View.Empty;
const Fail = View.Fail;

class Home extends BasePage<Props, State, Match> {
  constructor(props: PageProps<Match>, state: State) {
    super(props, state);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.maskRef = React.createRef();
    this.init();
  }

  public state: State = {
    maskStyle: {
      display: 'none'
    }
  };

  public displayName: string = 'Home';
  public pageName: string = '';
  private maskRef: React.RefObject<HTMLDivElement>;
    // 按住屏幕开始的时间
  private startTime: number = 0;
    // // 按住屏幕结束的时间
  private endTime: number = 0 ;
  private timer: NodeJS.Timer | number | undefined;

  private handleTouchStart(): void {
    console.log('touch start');
    const pageHome = this.pageElemRef.current;
    const mask = this.maskRef.current;
    this.startTime = +new Date();
    this.timer = setTimeout(() => {
      console.log('this is long click');
      if (pageHome && mask) {
        html2canvas(pageHome, {
        }).then((canvas: any) => {
          const img = canvas.toDataUrl();
          console.log(img);
          mask.appendChild(canvas);
          this.setState({
            maskStyle: {
              display: 'block'
            }
          });
        });
      }
    }, 700);
  }

  private handleTouchEnd(): void {
    this.endTime = +new Date();
    clearTimeout(this.timer as NodeJS.Timer);
    if(this.endTime - this.startTime < 700) {
      console.log('this is click');

    }
  }
  public render(): JSX.Element {
    return (
      <div
        className={style.page}
        ref={this.pageElemRef}
        onTouchStart= {this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <div
          className={style.mask}
          style={this.state.maskStyle}
          ref={this.maskRef}
        >
        </div>
        <Context.Consumer>
          {() => (
            <Page pageId={this.pageId}>
              <View>
                <Complete>
                  <div>
                    <Contact
                      name="张美玲"
                      profession="置业顾问"
                      tel="138 9889 8743"
                    />
                  </div>
                </Complete>
                <Empty>
                  <div>空页面</div>
                </Empty>
                <Fail>
                  <div>错误页面</div>
                </Fail>
              </View>
            </Page>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

export default Home;
