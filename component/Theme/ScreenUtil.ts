import { Dimensions, PixelRatio, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

/**
 * @todo 全局 Screen Helper
 *
 * @class ScreenUtil
 */
class ScreenUtil {

  /**
   * @param {uiWidth} 设计图的宽度
   * @param {uiHeight} 设计图的高度
   */
  public uiWidth: number = 375;
  public uiHeight: number = 667;
  /**
   * @param {X_WIDTH} iphoneX width
   * @param {X_HEIGHT} iphoneX height
   */
  public X_WIDTH: number = 375;
  public X_HEIGHT: number = 812;

  /**
   * @param {screenWidth} 设备屏幕宽度
   * @param {screenHeith} 设备屏幕高度
   */
  public screenWidth: number = Dimensions.get('window').width;
  public screenHeith: number = Dimensions.get('window').height;

  /**
   * @param {widthRadio} 宽度适配
   * @param {heightRadio} 高度适配
   */
  public scale: number = Math.min(Dimensions.get('window').height / this.uiHeight, Dimensions.get('window').width / this.uiWidth);
  public widthRadio: number = Dimensions.get('window').width / this.uiWidth;
  public heightRadio: number = Dimensions.get('window').height / this.uiHeight;

  /**
   * @param {widthRadio} iphoneX宽度适配
   * @param {heightRadio} iphoneX高度适配
   */
  public scaleIPX: number = Math.min(Dimensions.get('window').height / this.X_HEIGHT, Dimensions.get('window').width / this.X_WIDTH);
  public widthRadioIPX: number = Dimensions.get('window').width / this.X_WIDTH;
  public heightRadioIPX: number = Dimensions.get('window').height / this.X_HEIGHT;

  public pixel: number = 1 / PixelRatio.get();
  public pixelRatio: number = PixelRatio.get();
  public fontScale: number = PixelRatio.getFontScale();
  
  /**
   * @todo 宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：ScreenUtil.autowidth(50)
   */
  public autoWidth = (value: number) => {
    return (this.isIphoneX() ? this.widthRadioIPX : this.widthRadio) * value;
  }

  /**
   * @todo 高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：ScreenUtil.autoheight(50)
   */
  public autoHeight = (value: number) => {
    return (this.isIphoneX() ? this.heightRadioIPX : this.heightRadio) * value;
  }

  /*字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：ScreenUtil.setSpText(17)*/
  public setSpText = (number: number) => {
    number = Math.round((number * (this.isIphoneX() ? this.scaleIPX : this.scale) + 0.5) * this.pixelRatio / this.fontScale);
    return number / PixelRatio.get();
  }
  
  // 目前iPhone X序列手机的适配算法：高宽比先转换为字符串，截取前三位，转换为number类型 再乘以100
  public isIphoneX = () => {
    return (Platform.OS === 'ios' && (Number(((height / width) + "").substr(0, 4)) * 100) === 216);
  }

  public safeAreaView = () => {
    if (this.isIphoneX() === true) {
      return { paddingTop: this.autoHeight(44), paddingBottom: this.autoHeight(34) };
    } else {
      return {};
    }
  }
}

export default new ScreenUtil();