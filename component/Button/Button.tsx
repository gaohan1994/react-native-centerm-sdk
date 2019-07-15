import React from 'react';
import { 
  Dimensions, 
  ActivityIndicator, 
  TouchableOpacity, 
  Text, 
  ViewStyle, 
  TouchableOpacityProps, 
  TextStyle, 
  ActivityIndicatorProps
} from 'react-native';
import { ThemeHoc, ScreenUtil } from '../Theme';
import { ContextProps } from '../Theme/ThemeHoc';

const { width } = Dimensions.get('window');

const ButtonConfig = {
  big: {
    height: ScreenUtil.autoWidth(45),
    width: width * 0.8,
  },
  normal: {
    height: ScreenUtil.autoWidth(45),
    width: width * 0.4,
  },
  small: {
    paddingHorizontal: ScreenUtil.autoWidth(10),
    paddingVertical: ScreenUtil.autoWidth(8),
  }
};

const defaultLoadingProps = (type: 'primary' | 'ghost', theme): ActivityIndicatorProps => ({
  color: type === 'primary' ? 'white' : theme.primary,
  size: 'small',
});

export interface ButtonProperties {
  title: string | number;
  titleStyle?: TextStyle;
  size?: 'big' | 'normal' | 'small';
  type?: 'primary' | 'ghost';
  loading?: boolean;
  loadingStyle?: any;
  radius?: boolean;
}

export type ButtonProps = ButtonProperties & TouchableOpacityProps & ContextProps;

type Stete = { };

class Button extends React.Component<ButtonProps, Stete> {

  static defaultProps: ButtonProperties = {
    title: '',
    type: 'primary',
    size: 'big',
    radius: true,
    loading: false,
  };

  public buildStyle = (): ViewStyle => {
    const { type, size, radius, theme, style = {} } = this.props;
    
    const buttonStyle = {
      ...styles.button(type, theme),
      ...styles.size(size),
      ...styles.radius(radius),
      ...styles.shadow,
      style,
    };
    return buttonStyle;
  }

  public buildTextStyle = (): TextStyle => {
    const { type, size, theme, titleStyle = {} } = this.props;

    const textStyle = {
      ...styles.title(type, size, theme),
      titleStyle
    };
    return textStyle;
  }

  render () {
    const { type, theme, loading, loadingStyle, title, ...rest } = this.props;
    const loadingProps = { ...defaultLoadingProps(type, theme) };
    return (
      <TouchableOpacity style={this.buildStyle()} {...rest} >
        {loading && (
          <ActivityIndicator 
            style={[styles.loading, loadingStyle]}
            {...loadingProps}
          />
        )}

        {!loading && !!title && (
          <Text style={this.buildTextStyle()} >{title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles: any = {
  button: (type: 'primary' | 'ghost', theme) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.primary,
    backgroundColor: type === 'primary' ? theme.primary : 'transparent',
  }),
  size: (size: 'big' | 'normal' | 'small') => {
    switch (size) {
      case 'big':
        return { ...ButtonConfig.big };
      case 'normal':
        return { ...ButtonConfig.normal };
      case 'small':
        return { ...ButtonConfig.small };
      default:
        return { ...ButtonConfig.big };
    }
  },
  radius: (radius: boolean) => {
    if (radius === true) {
      return { borderRadius: ScreenUtil.autoWidth(22) };
    } else {
      return { };
    }
  },
  shadow: {
    shadowOffset: { width: 2, height: 2 }, 
    shadowOpacity: 0.6, 
    shadowRadius: 6, 
    elevation: 10 
  },
  title: (type: 'primary' | 'ghost', size: 'big' | 'normal' | 'small', theme) => ({
    color: type === 'primary' ? 'white' : theme.primary,
    fontSize: ScreenUtil.setSpText(size !== 'small' ? 15 : 12),
    textAlign: 'center',
  }),
  loadding: {
    marginVertical: 2,
  }
};

export default ThemeHoc(Button, 'Button');