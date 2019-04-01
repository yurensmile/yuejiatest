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
import Contact from './view/components/Contact';
// import Button from 'yuejia/component/Popup/Button';
// import Nav from './view/pages/Nav';

global.routes = [
  // <Route exact key="页面名称" path="路由" component={Home} />,
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
         <Contact
          funcName={['空中楼盘', 'VR看房', '房贷计算器', '专属服务']}
          name="张美玲"
          profession="置业顾问"
          tel="138 9889 8743"
        />
       </div>
    );
  }
}

export default App;
