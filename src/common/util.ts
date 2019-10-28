/*
 * @Author: Ghan 
 * @Date: 2019-09-27 15:00:58 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 13:59:19
 */

import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');

/**
 * @todo 全局 Screen Helper
 * @class ScreenUtil
 */
export class ScreenUtil {

  /**
   * @param {uiWidth} 设计图的宽度
   * @param {uiHeight} 设计图的高度
   */
  static uiWidth: number = 375;
  static uiHeight: number = 667;
  /**
   * @param {X_WIDTH} iphoneX width
   * @param {X_HEIGHT} iphoneX height
   */
  static X_WIDTH: number = 375;
  static X_HEIGHT: number = 812;

  /**
   * @param {screenWidth} 设备屏幕宽度
   * @param {screenHeith} 设备屏幕高度
   */
  static screenWidth: number = Dimensions.get('window').width;
  static screenHeith: number = Dimensions.get('window').height;

  /**
   * @param {widthRadio} 宽度适配
   * @param {heightRadio} 高度适配
   */
  static scale: number = Math.min(Dimensions.get('window').height / ScreenUtil.uiHeight, Dimensions.get('window').width / ScreenUtil.uiWidth);
  static widthRadio: number = Dimensions.get('window').width / ScreenUtil.uiWidth;
  static heightRadio: number = Dimensions.get('window').height / ScreenUtil.uiHeight;

  /**
   * @param {widthRadio} iphoneX宽度适配
   * @param {heightRadio} iphoneX高度适配
   */
  static scaleIPX: number = Math.min(Dimensions.get('window').height / ScreenUtil.X_HEIGHT, Dimensions.get('window').width / ScreenUtil.X_WIDTH);
  static widthRadioIPX: number = Dimensions.get('window').width / ScreenUtil.X_WIDTH;
  static heightRadioIPX: number = Dimensions.get('window').height / ScreenUtil.X_HEIGHT;

  static pixel: number = 1 / PixelRatio.get();
  static pixelRatio: number = PixelRatio.get();
  static fontScale: number = PixelRatio.getFontScale();
  
  /**
   * @todo [宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：ScreenUtil.autowidth(50)]
   */
  static autoWidth = (value: number) => {
    return (ScreenUtil.isIphoneX() ? ScreenUtil.widthRadioIPX : ScreenUtil.widthRadio) * value;
  }

  /**
   * @todo 高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：ScreenUtil.autoheight(50)
   */
  static autoHeight = (value: number) => {
    return (ScreenUtil.isIphoneX() ? ScreenUtil.heightRadioIPX : ScreenUtil.heightRadio) * value;
  }

  /**
   * @todo [字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：ScreenUtil.setSpText(17)]
   * @todo [本项目不做适配了，直接返回]
   * @memberof ScreenUtil
   */
  static setSpText = (num: number) => {
    const fontSize = Math.round((num * (ScreenUtil.isIphoneX() ? ScreenUtil.scaleIPX : ScreenUtil.scale) + 0.5) * ScreenUtil.pixelRatio / ScreenUtil.fontScale);
    return fontSize / PixelRatio.get();
  }

  /**
   * @todo check current device is iphonex
   * @todo [目前iPhoneX序列手机的适配算法：高宽比先转换为字符串，截取前三位，转换为number类型再乘以100]
   * @static
   * @memberof ScreenUtil
   */
  static isIphoneX = () => {
    return (Platform.OS === 'ios' && (Number(((height / width) + "").substr(0, 4)) * 100) === 216);
  }
}