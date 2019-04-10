import yj from 'yuejia/typings';
import * as React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import axios from 'axios';
import global from 'yuejia/app/global';
import PageStack from 'yuejia/component/PageStack';
import Model, { Context } from 'yuejia/component/Model';
import ImgView from 'yuejia/component/ImgView';
import { WeiXin } from 'yuejia/app/weixin';
// import Behavior from 'yuejia/model/behavior';
import Request from 'yuejia/app/request';
// import model from './model';
import config from './config';
// import Contact from './view/components/Contact';
import Home from './view/pages/Home'
// import Button from 'yuejia/component/Popup/Button';
// import Nav from './view/pages/Nav';

global.routes = [
  <Route exact key="home" path="/" component={Home} />,
];

global.appRoute = (props: yj.PageProps<any>) => (
  <Switch location={props.location}>
    {global.routes}
  </Switch>
);

class App extends React.Component<any> {
  constructor(props: any) {
    super(props);

    axios.defaults.baseURL = config.variable.app.baseURL;
    ImgView.defaultHost = config.variable.app.imgHost;
    // 行为记录需要帐户系统的数据模型
    // Behavior.options = {
    //   ...config.variable.behavior,
    //   account: model.account
    // };
    Request.defaultData = {
      userCacheId: config.variable.app.userCacheId,
      wxConfigId: config.variable.app.wxConfigId
    };
    Request.defaultParams = {
      userCacheId: config.variable.app.userCacheId,
      wxConfigId: config.variable.app.wxConfigId
    };
    WeiXin.options = config.variable.wx;

    // 获取用户信息
    // if (model.account.getRequest) {
    //   model.account.getRequest.send();
    // }

  }

  public render(): JSX.Element {
    return (
      <Model>
        {(value) => (
          <Context.Provider value={value}>
            <HashRouter>
              <PageStack />
            </HashRouter>
          </Context.Provider>
        )}
      </Model>
      //  <div>

      //  </div>
    );
  }
}

export default App;
