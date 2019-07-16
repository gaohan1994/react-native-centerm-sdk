
/**
 * @param message string 打印信息
 */
const ConsoleUtil = (message: any, title?: string): void => {
  if (title) {
    console.log(`---------------------- ${title} ----------------------`);
  }
  console.log(message);
  if (title) {
    console.log(`---------------------- ${title}结束 ----------------------`);
  }
};

/**
 * 默认错误处理函数
 * @param error RequsetError
 */
const defaultErrorCallback = async (error: any) => {
  ConsoleUtil(error, '[ERROR]');
};

export const request = async (
  url: string,
  ...args: Array<any>
): Promise<any> => {
  const argByType: any = {};
  const functions: any = [];
  let callback: any;
  let errorCallback = defaultErrorCallback;

  args.forEach(arg => {
    if (typeof arg === 'function') {
      functions.push(arg);
    } else {
      argByType[typeof arg] = arg;
    }
  });

  /**
   *  判断长度 第一个是 callback 第二个是 errorcallback
   */
  if (functions && functions.length > 0) {
    if (functions.length === 1) {
      callback = functions[0];
    } else if (functions.length === 2) {
      callback = functions[0];
      errorCallback = functions[1];
    }
  }

  const httpMethod = (argByType.string || 'GET').toUpperCase();
  const params = argByType.object || {};
  let options: RequestInit = {
    /* 默认method */
    method: httpMethod,
    /* 默认headers */
    headers: {
      'Content-Type': 'application/json',
    }
  };
  ConsoleUtil(params, '请求报文');

  if (options.method) {
    if (options.method.toUpperCase() !== 'GET') {
      options.body = params
      ? JSON.stringify(params) 
      : '';
    }
  }

  try {
    return fetch(url, options)
    .then((response: Response) => response.json())
    .then((responseJson: any): any => {
      ConsoleUtil(responseJson, '响应报文');
      if (callback) {
        callback(responseJson);
      }
      return responseJson;
    })
    .catch((e: any) => {
      errorCallback(e);
      return false;
    });
  } catch (error) {
    errorCallback(error);
  }
};