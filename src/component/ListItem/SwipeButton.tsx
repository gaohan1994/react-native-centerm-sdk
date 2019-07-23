import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProperties, TextStyle } from 'react-native';
import { ScreenUtil, renderNode } from '../Theme';
import { ReactNodeType } from '../types';
import ThemeHoc, { ContextProps } from '../Theme/ThemeHoc';

export type SwipeButtonType = 'info' | 'delete' | 'cancel';

export type SwipeButtonProps = {
  type?: SwipeButtonType;
  title?: ReactNodeType;
  titleStyle?: TextStyle;
} & TouchableOpacityProperties & Partial<ContextProps>;

class SwipeButton extends React.Component<SwipeButtonProps> {

  public render() {
    const { 
      title,
      titleStyle,
      theme,
      type,
      style,
      ...rest
    } = this.props;
    return (
      <TouchableOpacity
        style={StyleSheet.flatten([
          styles.containerStyle(theme, type),
          style,
        ])}
        {...rest} 
      >
        {renderNode(Text, title, {
          style: StyleSheet.flatten([
            styles.title,
            titleStyle,
          ])
        })}
      </TouchableOpacity>
    );
  }
}

const styles: any = {
  containerStyle: (theme: any, type: SwipeButtonType = 'info') => ({
    backgroundColor: theme[`${type}Color`],
    paddingHorizontal: ScreenUtil.autoWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  }),
  title: {
    color: 'white',
    fontSize: ScreenUtil.setSpText(12)
  }
};

export default ThemeHoc(SwipeButton);