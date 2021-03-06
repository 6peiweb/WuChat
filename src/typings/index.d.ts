declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}


declare namespace lp {

  export interface RouteConfig {
    path: string;
    name?: string;
    component?: Object;
    redirect?: string | Object;
    alias?: string | Array<string>;
    children?: Array<RouteConfig>;
    beforeEnter?: (to: RouteConfig, form: RouteConfig, next: Function) => void;
    meta?: any;
  }

  export interface RawLocation {
    name: string;
    path?: string;
    redirect?: string | Object;
    meta?: any;
  }

  export interface StoreOptions {
    state?: object;
    getters?: any;
    actions?: any;
    mutations?: any;
    modules?: any;
    plugins?: any;
    strict?: boolean;
  }

  export interface ILib {
    http: any;
    md5: Object;
  }

  export interface IMint {
    Indicator: any;
    MessageBox : any;
  }

  export interface UserConfig {
    username: string;
    password: string;
    mobilephone: string;
  }

  export interface Tabbar {
    name: string;
    title: string;
    imgSrc: string;
  }
  
}

declare var ILib: lp.ILib;
declare var ISocket: any;
declare var IMint: lp.IMint;
declare var IClipboard: (method: string, content: string) => void;
