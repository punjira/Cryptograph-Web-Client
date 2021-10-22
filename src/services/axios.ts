/**
 * axios request helper
 *
 * use this class singleton instance instead of using the regular axios provided method
 *
 *
 * (notice where the exported function is lexically scoped)
 */

import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

/**
 *
 * @param config axios request config
 * make axios request call with all custom settings (headers, interceptors, ...etc) \
 * set inside getAxios class
 */
export default function makeXHRRequest(
  config: AxiosRequestConfig
): AxiosPromise {
  return getAxios.getInstance().xhr(config);
}

export const getAxios = (function () {
  class XHRService {
    xhr: AxiosInstance;
    interceptor_id!: number;
    constructor() {
      this.xhr = axios.create();
    }
    request(config_object: AxiosRequestConfig): AxiosPromise {
      /**
       * @todo update headers list
       * probably not a good idea! but keep the user headers just to make them feel better!
       */
      return this.xhr({
        ...config_object,
        headers: { ...config_object.headers }
      });
    }
  }
  let instance: XHRService;
  return {
    getInstance: function () {
      if (!instance) {
        instance = new XHRService();
      }
      return instance;
    }
  };
})();
