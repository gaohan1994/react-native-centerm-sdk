<!--
 * @Description: In User Settings Edit
 * @Author: Gaohan
 * @Date: 2019-07-23 14:16:43
 * @LastEditTime: 2019-09-29 10:26:04
 * @LastEditors: Please set LastEditors
 -->

# React-Native-Centerm-Sdk

A UI library for react-native. build for Centerm Stuff.
服务于升腾雨滴的企业级UI库

[![Build Status](https://travis-ci.org/gaohan1994/react-native-centerm-sdk.svg?branch=master)](https://travis-ci.org/gaohan1994/react-native-centerm-sdk)
[![codecov](https://codecov.io/gh/gaohan1994/react-native-centerm-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/gaohan1994/react-native-centerm-sdk)

## INSTALL

```
npm i react-native-centerm-sdk --save
```

or
```
yarn add react-native-centerm-sdk
```

## Components

### Button

[`<Button />` 按钮](./Button.md)

<img src="http://net.huanmusic.com/button.jpg" width="100" height="200" />

```js
import { Button } from 'react-native-centerm-sdk';

class Page extends React.Component<any, any> {
  render () {
    return (
      <Button title="hello world" />
    );
  }
}
```

### ListItem

[`<ListItem />` 列表行](./ListItem.md)

<img src="http://net.huanmusic.com/ListItem.jpg" width="100" height="200" />

```js
import { ListItem } from 'react-native-centerm-sdk';

class Page extends React.Component<any, any> {
  render () {
    return (
      <View>
        <ListItem
          icon={{uri: 'http://net.huanmusic.com/react.png'}}
          bottomBorder={true}
          title={'React Native'}
          subTitle="React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。"
        />
        <ListItem
          icon={{uri: 'http://net.huanmusic.com/react.png'}}
          bottomBorder={true}
          title={'ListItem Uasge'}
          detailTitle={'SwipeButton'}
          detailSubTitle={'Uasge'}
          swipeButtons={[
            <ListItemSwipeButton onPress={() => { console.log('cancel'); }} title="cancel" type="cancel" key="cancel" />,
            <ListItemSwipeButton onPress={() => { console.log('info'); }} title="info" type="info" key="info" />,
            <ListItemSwipeButton onPress={() => { console.log('delete'); }} title="delete" type="delete" key="delete" />,
          ]}
        />
      </View>
    );
  }
}
```
