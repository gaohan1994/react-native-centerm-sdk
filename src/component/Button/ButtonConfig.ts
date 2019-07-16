import { 
  Dimensions,
  StyleSheet,
} from 'react-native';
import { ScreenUtil } from '../Theme';
import { ThemeType } from '../Theme/ThemeHoc';
import { ButtonTypeProperty, ButtonSizeProperty } from './Button';

export const { width } = Dimensions.get('window');

export const ButtonConfig = {
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

export const styles: any = {
  button: (type: ButtonTypeProperty, theme: ThemeType) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: type === 'ghost' ? StyleSheet.hairlineWidth : 0,
    borderColor: theme.primary,
    backgroundColor: type === 'primary' ? theme.primary : 'transparent',
    marginTop: ScreenUtil.autoWidth(5),
  }),
  size: (size: ButtonSizeProperty) => {
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
  title: (type: ButtonTypeProperty, size: ButtonSizeProperty, theme: ThemeType) => ({
    color: type === 'primary' ? 'white' : theme.primary,
    fontSize: ScreenUtil.setSpText(size !== 'small' ? 15 : 12),
    textAlign: 'center',
  }),
  loadding: {
    marginVertical: 2,
  }
};