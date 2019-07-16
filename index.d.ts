import React from 'react';
import { TouchableOpacityProps, TextStyle }  from 'react-native';
declare module "react-native-centerm-sdk" { 

  export function request <T>(
    url: string,
    httpMethod?: string,
    body?: any,
    callback?: (params: T) => any,
    errorCallback?: (params: Error) => any,
  ): Promise<T>;
}

/**
 * [ButtonProps]
 */
export type ButtonTypeProperty = 'primary' | 'ghost';

export interface ButtonProperties {
  title: string | number;
  titleStyle?: TextStyle;
  size?: 'big' | 'normal' | 'small';
  type?: ButtonTypeProperty;
  loading?: boolean;
  loadingStyle?: any;
  radius?: boolean;
  linearGradientProps?: any;
  ViewComponent?: any;
}
export type ButtonProps = ButtonProperties & TouchableOpacityProps;

export declare class Button extends React.Component <ButtonProps, any> {}