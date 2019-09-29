<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 10:21:54
 * @LastEditTime: 2019-09-29 11:35:10
 * @LastEditors: Please set LastEditors
 -->
# `<ListItem />` 列表行
ListItem 组件用于显示一个列表行, 定义了一系列易于使用的元素属性, 使得可以快速开发出基于 ListView、ScrollView 的应用。

## Props
| Prop | Type | Default | Note |
|---|---|---|---|
| [TouchableOpacity props...](https://facebook.github.io/react-native/docs/touchableopacity.html) |  |  | ListRow 组件继承 TouchableOpacity 组件的全部属性。
| containerStyle | style | | a
| topBorder | boolean | false | 顶部border
| bottomBorder | boolean | false | 底部border
| leftElement | React Elements | null | 渲染ListItem左边
| icon | ReactNative.Image source | null | 图标, 可以是 Image.source 或 React Native 组件, 如设置则显示在列表行左侧。
| contentContainer | style | null | 主view的样式
| title | string<br/>number<br/>element |  | 标题, 可以是字符串、数字或 React Native 组件。
| titleStyle | 同Text.style |  | 标题样式, 当 title 类型为 element 时无效。
| subTitle | string<br/>number<br/>element |  | 副标题, 可以是字符串、数字或 React Native 组件。
| subTitleStyle | 同Text.style |  | 副标题样式, 当 title 类型为 element 时无效
| detailTitle | string<br/>number<br/>element |  | 详细内容标题, 可以是字符串、数字或 React Native 组件。
| detailTitleStyle | 同Text.style |  | 详细内容标题样式, 当 title 类型为 element 时无效
| detailSubTitle | string<br/>number<br/>element |  | 详细内容副标题, 可以是字符串、数字或 React Native 组件。
| detailSubTitleStyle | 同Text.style |  | 详细内容副标题样式, 当 title 类型为 element 时无效

## Events
| Event Name | Returns | Notes |
|---|---|---|
| [TouchableOpacity events...](https://facebook.github.io/react-native/docs/touchableopacity.html) |  | ListRow 组件继承 TouchableOpacity 组件的全部事件。

## Static Props
| Prop | Type | Default | Note |
|---|---|---|---|
| [SwipeActionButton](#listrowswipeactionbutton--props) | class |  | 滑动按钮组件。

## `<ListItemSwipeButton />` Props
| Prop | Type | Default | Note |
|---|---|---|---|
| [TouchableOpacity props...](https://facebook.github.io/react-native/docs/touchableopacity.html) |  |  | SwipeActionButton 组件继承 TouchableOpacity 组件的全部属性。
| type | string | 'default' | 显示样式类型。<br/>- info: 信息<br/>- delete: 删除<br/>- cancel: 取消
| title | string<br/>number<br/>element |  | 标题, 可以是字符串、数字或 React Native 组件。
| titleStyle | 同Text.style |  | 标题样式, 当 title 类型为 element 时无效。

## `<ListItemSwipeButton />` Events
| Event Name | Returns | Notes |
|---|---|---|
| [TouchableOpacity events...](https://facebook.github.io/react-native/docs/touchableopacity.html) |  | SwipeActionButton 组件继承 TouchableOpacity 组件的全部事件。

<!--
## Methods
None.

## Static Methods
None.
-->

## Example

```jsx
<ListItem
  icon={{uri: 'http://net.huanmusic.com/react.png'}}
  bottomBorder={true}
  title={'ReactNativeCentermSdk'}
/>
<ListItem
  icon={{uri: 'http://net.huanmusic.com/react.png'}}
  bottomBorder={true}
  title={'React Native'}
  subTitle="React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。"
/>
<ListItem
  icon={{uri: 'http://net.huanmusic.com/react.png'}}
  bottomBorder={true}
  title={'Gao Han'}
  subTitle={'Front End Developer'}
/>
<ListItem
  icon={{uri: 'http://net.huanmusic.com/react.png'}}
  bottomBorder={true}
  title={'Hello world'}
  subTitle={'React Native'}
  detailTitle={'Label'}
  detailSubTitle={'14:41'}
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
```

## Screenshots
![](../screenshots/)
