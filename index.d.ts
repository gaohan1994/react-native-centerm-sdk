import React from 'react';
import { 
  TouchableOpacityProps, 
  TextStyle, 
  TouchableOpacityProperties,
  TextProperties,
  ViewStyle,
}  from 'react-native';

export type ReactNodeType = React.ReactElement<any> | string | number | Function | boolean;

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

export declare class Button extends React.Component<ButtonProps, any> {}

export type SwipeButtonType = 'info' | 'delete' | 'cancel';

export type ListItemSwipeButtonProps = {
  type?: SwipeButtonType;
  title?: ReactNodeType;
  titleStyle?: TextStyle;
} & TouchableOpacityProperties;

declare class ListItemSwipeButton extends React.Component<ListItemSwipeButtonProps, any> {}

export type ListItemProps = { 
  containerStyle?: ViewStyle;
  topBorder?: boolean;
  bottomBorder?: boolean;
  leftElement?: ReactNodeType;
  icon?: ReactNodeType;
  contentContainer?: ViewStyle;
  title?: ReactNodeType;
  titleProps?: TextProperties;
  titleStyle?: TextStyle;
  subTitle?: ReactNodeType;
  subTitleProps?: TextProperties;
  subTitleStyle?: TextStyle;
  detailContentContainer?: ViewStyle;
  detailTitle?: ReactNodeType;
  detailTitleProps?: TextProperties;
  detailTitleStyle?: TextStyle;
  detailSubTitle?: ReactNodeType;
  detailSubTitleProps?: TextProperties;
  detailSubTitleStyle?: TextStyle;
  swipeButtons?: any[];
  swipeContainerStyle?: ViewStyle;
} & TouchableOpacityProperties;

export declare class ListItem extends React.Component<ListItemProps, any> {}

export declare class ScreenUtil {
  static uiWidth: number;
  static uiHeight: number;
  static X_WIDTH: number;
  static X_HEIGHT: number;
  static screenWidth: number;
  static screenHeith: number;
  static scale: number;
  static widthRadio: number;
  static heightRadio: number;
  static scaleIPX: number;
  static widthRadioIPX: number;
  static heightRadioIPX: number;
  static pixel: number;
  static pixelRatio: number;
  static fontScale: number;
  static autoWidth: (width: number) => number;    //传入UI宽度输出适配宽度
  static autoHeight: (height: number) => number;  //传入UI高度输出适配高度
  static setSpText: (size: number) => number;     //传入UI字体输出适配字体
  static isIphoneX: () => boolean;                //返回是否为刘海屏幕
}