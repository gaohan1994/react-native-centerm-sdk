import React from 'react';
import { View, Text, ViewStyle, TouchableOpacityProperties, StyleSheet, Image, TextProperties, TextStyle, ImageStyle } from 'react-native';
import SwipeComponent from './SwipeComponentView';
import { ScreenUtil, renderNode } from '../Theme';
import { ReactNodeType } from '../types';
import ThemeHoc, { ContextProps } from '../Theme/ThemeHoc';

const renderIcon = (icon?: any, iconStyle?: ImageStyle): React.ReactNode => {
  if (icon === null || icon === undefined || React.isValidElement(icon)) {
    return icon;
  }
  return (
    <Image 
      style={StyleSheet.flatten([{width: ScreenUtil.autoWidth(25), height: ScreenUtil.autoWidth(25)}, iconStyle])} 
      source={icon} 
    />
  );
};

const renderText = (content?: ReactNodeType, textProps?: TextProperties, textStyle?: TextStyle): React.ReactNode => {
  return renderNode(Text, content, {
    ...textProps,
    style: StyleSheet.flatten([textStyle, textProps && textProps.style])
  });
};

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
} & TouchableOpacityProperties & Partial<ContextProps>;

type ListItemState = {
  swipeWidth: number;
};

class ListItem extends React.Component<ListItemProps, ListItemState> {

  state = {
    swipeWidth: 0
  };

  public buildContainerStyle = (): ViewStyle => {
    const { containerStyle, topBorder, bottomBorder, theme } = this.props;

    const style = StyleSheet.flatten([
      styles.container(theme),
      topBorder && { borderTopWidth: StyleSheet.hairlineWidth },
      bottomBorder && { borderBottomWidth: StyleSheet.hairlineWidth },
      containerStyle,
    ]);
    return style;
  }

  render () {
    const { 
      onLayout, 
      leftElement, 
      icon, 
      contentContainer,
      title, 
      titleProps, 
      titleStyle,
      subTitle,
      subTitleProps,
      subTitleStyle,
      detailContentContainer,
      detailTitle,
      detailTitleProps,
      detailTitleStyle,
      detailSubTitle,
      detailSubTitleProps,
      detailSubTitleStyle,
      swipeButtons,
      activeOpacity,
      onPress,
      ...restAttribute
    } = this.props;
    return (
      <View onLayout={onLayout} >
        {this.renderSwipeButtonsView()}
        <SwipeComponent 
          {...restAttribute}
          onPress={onPress}
          style={this.buildContainerStyle()}
          swipeWidth={this.state.swipeWidth}
          animatedAuth={swipeButtons instanceof Array && swipeButtons.length > 0}
          activeOpacity={typeof activeOpacity === 'number' ? activeOpacity : (onPress ? 0.2 : 1)}
        >
          {renderNode(Text, leftElement)}
          {renderIcon(icon, { marginRight: ScreenUtil.autoWidth(14) })}
          {
            (typeof title !== 'undefined' || subTitle) && (
              <View style={StyleSheet.flatten([styles.contentContainer, contentContainer])}>
                {renderText(
                  title, 
                  titleProps, 
                  StyleSheet.flatten([styles.title, titleStyle])
                )}
                {renderText(
                  subTitle, 
                  subTitleProps, 
                  StyleSheet.flatten([styles.subTitle, subTitleStyle])
                )}
              </View>
            )
          }
          {
            (typeof detailTitle !== 'undefined' || detailSubTitle) && (
              <View style={StyleSheet.flatten([styles.detailContentContainer, detailContentContainer])}>
                {renderText(
                  detailTitle, 
                  detailTitleProps, 
                  StyleSheet.flatten([styles.detailTitle, styles.title, detailTitleStyle])
                )}
                {renderText(
                  detailSubTitle, 
                  detailSubTitleProps, 
                  StyleSheet.flatten([styles.detailSubTitle, styles.subTitle, detailSubTitleStyle])
                )}
              </View>
            )
          }
        </SwipeComponent>
      </View>
    );
  }

  private renderSwipeButtonsView = (): React.ReactNode => {
    const { swipeButtons, swipeContainerStyle } = this.props;

    if (!(swipeButtons instanceof Array) || swipeButtons.length === 0) {
      return null;
    }

    return (
      <View 
        onLayout={e => this.setState({swipeWidth: e.nativeEvent.layout.width})}
        style={StyleSheet.flatten([styles.swipeContentContainer, swipeContainerStyle])}
      >
        {
          swipeButtons.map((SwipeButtonItem: any, index: number) => {
            return React.cloneElement(SwipeButtonItem, {
              key: index,
              onPress: () => {
                if (SwipeButtonItem.props.onPress) {
                  SwipeButtonItem.props.onPress();
                }
              }
            });
          })
        }
      </View>
    );
  }
}

const styles: any = {
  container: (theme: any) => ({
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: theme.divider,
    padding: ScreenUtil.autoWidth(14),
  }),
  contentContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  detailContentContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: ScreenUtil.setSpText(14),
  },
  subTitle: {
    backgroundColor: 'transparent',
    fontSize: ScreenUtil.setSpText(12),
    color: 'rgba(0, 0, 0, .6)'
  },
  detailTitle: {
    backgroundColor: 'transparent'
  },
  detailSubTitle: {
    backgroundColor: 'transparent'
  },
  swipeContentContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-end'
  }
};

export default ThemeHoc(ListItem);