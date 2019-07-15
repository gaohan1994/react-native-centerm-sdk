import React from 'react';
import { ButtonProps } from './component/Button/Button';

declare module "react-native-centerm-sdk" { 

  export function request <T>(
    url: string,
    httpMethod?: string,
    body?: any,
    callback?: (params: T) => any,
    errorCallback?: (params: Error) => any,
  ): Promise<T>;

  export class Button extends React.Component <ButtonProps, any> {}
}