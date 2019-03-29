import yj from 'yuejia/typings';
import * as React from 'react';
import { Switch } from 'react-router-dom';
import axios from 'axios';
import global from 'yuejia/app/global';
// import PageStack from 'yuejia/component/PageStack';
// import Model, { Context } from 'yuejia/component/Model';
import ImgView from 'yuejia/component/ImgView';
import { WeiXin } from 'yuejia/app/weixin';
// import Behavior from 'yuejia/model/behavior';
import Request from 'yuejia/app/request';
// import model from './model';
import config from './config';
// import Home from './view/pages/Home/index';
// import Nav from './view/pages/Nav/index';
// import divide = require('yuejia/typings/lodash/divide');
// import Border from 'yuejia/component/Border';
// import Calendar from 'yuejia/component/Calendar';
import Choice from 'yuejia/_base/action/Choice';
import Center from 'yuejia/component/Map/Center';

global.routes = [
  // <Route exact key="页面名称" path="路由" component={Home} />,
];

global.appRoute = (props: yj.PageProps<any>) => (
  <Switch location={props.location}>
    {global.routes}
  </Switch>
);

const data = [{
  text: '1',
  value: 'a'
}, {
  text: '2',
  value: 'b'
}];

const style: React.CSSProperties = {
  background: 'aliceblue',
  flex: 1,
  textAlign: 'center',
  borderLeft: '6px solif #fff',
  borderRight: '6px solif #fff'
};

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
      // <Model>
      //   {(value) => (
      //     <Context.Provider value={value}>
      //       <HashRouter>
      //         <PageStack />
      //         <Nav />
      //       </HashRouter>
      //     </Context.Provider>
      //   )}
      // </Model>
      <div>
        {/* <ListView/>*/}
        <Choice
          data={data}

        />
      </div>
    );
  }
}

export default App;