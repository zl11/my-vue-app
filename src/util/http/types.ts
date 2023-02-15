import type { AxiosRequestConfig } from 'axios'

export interface extraConf {
  encrypt?: Boolean;
  upload?: Boolean;
  loading?: Boolean;
  error?: Boolean;
}

export interface IrequestConfig extends AxiosRequestConfig {
  extra?: extraConf
}

export interface Iresponse<T = never> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: IrequestConfig;
  request?: any;
}