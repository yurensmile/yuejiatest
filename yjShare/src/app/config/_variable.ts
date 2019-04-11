import env from 'yuejia/utils/env';
import getIsSubscribe from 'yuejia/utils/getIsSubscribe';

// 后端在页面上注入的变量
interface ExtendWindow extends Window {
  /** 是否登录 */
  isLogin: boolean;
  /** 微信配置id */
  wxConfigId: string;
  /** 登录页面的url */
  loginURL: string;
  /** 登录页面的回调 */
  loginCallBack: string;
  /** 用户缓存id */
  userCacheId: string;
  /** 微信的appid */
  appId: string;
  /** 微信的ticket */
  ticket: string;
  /** 微信用户的openId */
  openId: string;
}

declare const window: ExtendWindow;
/** 微信的ticket */
const ticket = window.ticket;
/** 微信的appid */
const appId = window.appId;
/** 微信用户的openId */
const openId = window.openId;
/** 微信配置id */
const wxConfigId = window.wxConfigId;
/** 登录状态 */
const loginState = window.isLogin;
/** 用户缓存id */
const userCacheId = window.userCacheId;
/** 行为记录发送的api */
const behaviorApi = '';
/** 微信分享的默认标题 */
const shareTitle = '';
/** 微信分享的默认描述 */
const shareDesc = '';
/** 用户信息在storage储存的key */
const storageKey = '';
/** 关注状态 */
const subscribeState = getIsSubscribe();
/** 分享链接的前缀，用于拼接当前页面的路由 */
let shareLink!: () => string;
/** 网络请求的地址前缀 */
let baseURL = '';
/** 图片地址的前缀 */
let imgHost = '';

switch (env) {
  // 生产环境的配置
  case 'production':
    baseURL = '';
    imgHost = '';
    break;
  // 预发布环境的配置
  case 'prerelease':
    baseURL = '';
    imgHost = '';
    shareLink = () => '';
    break;
  // 开发环境的配置
  default:
    baseURL = '';
    imgHost = '';
    shareLink = () => '';
    break;
}

export default {
  // 应用需要的变量
  app: {
    wxConfigId,
    userCacheId,
    imgHost,
    baseURL,
  },
  // 帐户系统需要的变量
  account: {
    userCacheId,
    storageKey,
    loginState,
    subscribeState,
  },
  // 微信需要的变量
  wx: {
    openId,
    appId,
    ticket,
    shareTitle,
    shareDesc,
    shareLink,
  },
  // 行为统计需要的变量
  behavior: {
    api: behaviorApi,
  }
};