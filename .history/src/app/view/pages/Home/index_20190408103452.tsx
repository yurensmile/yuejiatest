import * as React from 'react';
import * as style from './index.scss';
import BasePage, { PageProps } from 'yuejia/app/Page';
import Page from 'yuejia/component/Page';
import View from 'yuejia/component/View';
import { Context } from 'yuejia/component/Model';
import Contact from '../../components/Contact'

interface Match {
}
interface Props {
}
interface State {
}

const Complete = View.Complete;
const Empty = View.Empty;
const Fail = View.Fail;

class Home extends BasePage<Props, State, Match> {
  constructor(props: PageProps<Match>, state: State) {
    super(props, state);
    this.startTime = 0;
    this.endTime = 0;
    this.init();
  }

  public displayName: string = 'Home';
  public pageName: string = '';
    // 按住屏幕开始的时间
  private startTime: number;
    // // 按住屏幕结束的时间
  private endTime: number ;
  private timer: NodeJS.Timer | number | undefined;

  private handleTouchStart(): void {
    console.log('touch start');
    this.startTime = +new Date();
    this.timer = setTimeout(function() {
      console.log('this is long click');
    }, 700);
  }

  private handleTouchEnd(): void {
    console.log('touch end');
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
                <div>this is a test</div>
              </View>
            </Page>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

export default Home;
