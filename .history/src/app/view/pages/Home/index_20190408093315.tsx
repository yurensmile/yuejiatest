import * as React from 'react';
import * as style from './index.scss';
import BasePage, { PageProps } from 'yuejia/app/Page';
import Page from 'yuejia/component/Page';
import View from 'yuejia/component/View';
import { Context } from 'yuejia/component/Model';
// import Contact from '../../components/Contact'

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
    this.init();
  }

  public displayName: string = 'Home';
  public pageName: string = '';

  public render(): JSX.Element {
    return (
      <div className={style.page} ref={this.pageElemRef}>
        <Context.Consumer>
          {() => (
            <Page pageId={this.pageId}>
              <View>
                <Complete>
                  <div>完成的页面</div>
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
