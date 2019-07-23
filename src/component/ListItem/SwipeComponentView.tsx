
import React from 'react';
import {
  Animated, 
  TouchableOpacityProperties, 
  Easing, 
  PanResponder, 
  PanResponderInstance,
  PanResponderGestureState,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export type SwipeComponentProps = {
  swipeWidth: number;
  animatedAuth: boolean;
} & TouchableOpacityProperties;
type State = { 
  translateX: Animated.Value;
};

const AnimatedDefaultConfig = {
  duration: 150,
  useNativeDriver: true,
  easing: Easing.ease
};

export default class SwipeComponent extends React.Component<SwipeComponentProps, State> {

  static defaultProps = {
    swipeWidth: 100,
    animatedAuth: true,
  };

  private panResponder: PanResponderInstance;
  private translateX: number;

  constructor(props: any) {
    super(props);
    this.translateX = 0;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderTerminationRequest: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderRelease: this.onPanResponderRelease,
      onPanResponderTerminate: this.onPanResponderRelease
    });
    this.state = {
      translateX: new Animated.Value(0)
    };
  }

  public onPanResponderMove = ({}, gestureState: PanResponderGestureState) => {
    // 最近一次的移动距离为gestureState.move{X,Y}
    // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
    const { dx } = gestureState;

    if (dx > 0) {
      /**
       * [向右滑动]
       */
      if (this.translateX === 0) {
        /**
         * [在初始位置且向右滑动]
         */
        return;
      }

      if (this.translateX < 0 && (this.translateX + dx) < 0) {
        /**
         * [滑动的距离超过最大距离]
         */
        this.translateX = 0;
      } else {
        this.translateX += (dx / 3);
      }
    } else {
      /**
       * [向左滑动]
       */
      if (Math.abs(this.translateX) < this.props.swipeWidth) {
        this.translateX += (dx / 10);
      } else {
        this.translateX = -this.props.swipeWidth;
      }
    }
    this.state.translateX.setValue(this.translateX);
  }

  public onPanResponderRelease = ({}, gestureState: PanResponderGestureState) => {
    const { vx, dx } = gestureState;
    if (vx < 0 || dx < 0) {
      /**
       * [向左滑动]
       */
      this.translateX = -this.props.swipeWidth;
    }

    if (vx > 0 || dx > 0) {
      /**
       * [向右滑动]
       */
      this.translateX = 0;
    }
    this.updateAnimated();
  }

  public updateAnimated = () => {
    Animated.timing(this.state.translateX, {
      toValue: this.translateX,
      ...AnimatedDefaultConfig
    }).start();
  }

  public springClose = () => {
    this.translateX = 0;
    Animated.timing(this.state.translateX, {
      toValue: this.translateX,
      duration: 5,
      useNativeDriver: true,
      easing: Easing.ease
    }).start();
  }

  public animatedBegin = () => {
    this.translateX = -this.props.swipeWidth;
    Animated.timing(this.state.translateX, {
      toValue: this.translateX,
      ...AnimatedDefaultConfig,
    }).start();
  }

  public animatedClose = () => {
    this.translateX = 0;
    Animated.timing(this.state.translateX, {
      toValue: this.translateX,
      ...AnimatedDefaultConfig,
    }).start();
  }

  render () {
    const { 
      animatedAuth, 
      children, 
      style = {}, 
      ...rest
    } = this.props;
    const ComponentView = animatedAuth === true ? Animated.View : TouchableOpacity;
    const animatedStyles: any = { 
      transform: [{
        translateX: this.state.translateX.interpolate({ 
          inputRange: [0, 150],
          outputRange: [0, 150]
        })
      }]
    };
    return (
      <ComponentView
        {...rest} 
        {...(animatedAuth === true ? this.panResponder.panHandlers : {})}
        style={StyleSheet.flatten([style, animatedStyles])} 
      >
        {children}
      </ComponentView>
    );
  }
}