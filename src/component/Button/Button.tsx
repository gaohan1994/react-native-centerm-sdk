import React from 'react';
import {
  Platform,
  ActivityIndicator, 
  TouchableOpacity, 
  Text, 
  ViewStyle, 
  TouchableOpacityProps, 
  TextStyle, 
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';
import { ThemeHoc } from '../Theme';
import { ContextProps, ThemeType } from '../Theme/ThemeHoc';
import { styles } from './ButtonConfig';

export type ButtonTypeProperty = 'primary' | 'ghost';
export type ButtonSizeProperty = 'big' | 'normal' | 'small';

export type ButtonProperties = {
  title: string | number;
  titleStyle?: TextStyle;
  size?: ButtonSizeProperty;
  type?: ButtonTypeProperty;
  loading?: boolean;
  loadingStyle?: any;
  radius?: boolean;
  linearGradientProps?: any;
  ViewComponent?: any;
};

export const ButtonDefaultProps: ButtonProperties = {
  title: '',
  type: 'primary',
  size: 'big',
  radius: true,
  loading: false,
};

const defaultLoadingProps = (type?: ButtonTypeProperty, theme?: ThemeType): ActivityIndicatorProps => ({
  color: type === 'primary' ? 'white' : theme && theme.primary || '',
  size: 'small',
});
export type ButtonProps = ButtonProperties & TouchableOpacityProps & Partial<ContextProps>;

type Stete = { };

class Button extends React.Component<ButtonProps, Stete> {

  static defaultProps: ButtonProperties = ButtonDefaultProps;

  componentDidMount() {
    const { linearGradientProps, ViewComponent } = this.props;
    if (linearGradientProps && !ViewComponent) {
      console.error(
        `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}`
      );
    }
  }
  
  public buildStyle = (): ViewStyle => {
    const { type, size, radius, theme, style = {} } = this.props;
    const buttonStyle: any = [{
      ...styles.button(type, theme),
      ...styles.size(size),
      ...styles.radius(radius),
      ...Platform.select({
        ios: styles.shadow,
        android: {}
      }),
    }].concat(style);
    
    return StyleSheet.flatten(buttonStyle);
  }

  public buildTextStyle = (): TextStyle => {
    const { type, size, theme, titleStyle = {} } = this.props;
    const textStyle: any = [{ ...styles.title(type, size, theme) }].concat(titleStyle);
    
    return StyleSheet.flatten(textStyle);
  }

  render () {
    const { 
      type, 
      theme, 
      loading, 
      loadingStyle, 
      title, 
      style, 
      onPress,
      linearGradientProps,
      ViewComponent = View,
      ...rest
    } = this.props;
    
    const TouchableWrapperProps: TouchableOpacityProps = {
      onPress,
      activeOpacity: 0.3,
      ...rest,
    };
    const loadingProps = { ...defaultLoadingProps(type, theme) };
    return (
      <TouchableOpacity {...TouchableWrapperProps} >
        <ViewComponent style={this.buildStyle()} {...linearGradientProps} >
          {loading && (
            <ActivityIndicator 
              style={[styles.loading, loadingStyle]}
              {...loadingProps}
            />
          )}

          {!loading && !!title && (
            <Text style={this.buildTextStyle()} >{title}</Text>
          )}
        </ViewComponent>
      </TouchableOpacity>
    );
  }
}

export default ThemeHoc(Button);