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