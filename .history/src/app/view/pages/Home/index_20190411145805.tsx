import * as React from 'react';
import * as style from './index.scss';
import BasePage, { PageProps } from 'yuejia/app/Page';
import Page from 'yuejia/component/Page';
import View from 'yuejia/component/View';
import { Context } from 'yuejia/component/Model';
// import Contact from '../../components/Contact';
import Con from '../Home/_Con';
import * as html2canvas from 'html2canvas';
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
    this.imgRef = React.createRef();
    this.contRef = React.createRef();
    this.init();
  }

  public displayName: string = 'Home';
  public pageName: string = '';
  private imgRef: React.RefObject<HTMLImageElement>;
  private contRef: React.RefObject<HTMLDivElement>;

  public componentDidMount(): void {
    const cont = this.pageElemRef.current;
    const img = this.imgRef.current;
    setTimeout(() => {
      if (cont) {
        html2canvas(cont, {
          allowTaint: true,
          taintTest: true,
          useCORS: true
        }).then((canvas) => {
          const imgSrc = canvas.toDataURL('image/jpeg');
          if (img) {
            img.src = imgSrc;
          }
        });
      }
    }, 1000);
  }

  public render(): JSX.Element {
    const imgStyle = {
      // width: '100vw',
      // height: '100vh',

    };
    return (
      <div
        className={style.page}
        ref={this.pageElemRef}
      >
        <img src="" alt="截图显示" style={imgStyle} ref={this.imgRef}/>
        <Context.Consumer>
          {() => (
            <Page pageId={this.pageId}>
              <View>
                <Complete>
                  <div ref={this.contRef}>
                    <Con/>
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
