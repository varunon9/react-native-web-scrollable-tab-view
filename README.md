# react-native-web-scrollable-tab-view
Scrollable Tab View for react-native-web

Since `react-native-scrollable-tab-view` (https://github.com/ptomasroos/react-native-scrollable-tab-view) has no official support for `react-native-web` as of now, I wrote a basic vaersion of it using `react-swipeable-views`

Check github Issue: https://github.com/ptomasroos/react-native-scrollable-tab-view/issues/973

### Add it to your react-native-web project

1. `yarn add react-native-web-scrollable-tab-view`
2. Mock `react-native-scrollable-tab-view` to this module in webpack.config.js file
  ```
  alias: {
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
    'react-native-scrollable-tab-view': 'react-native-web-scrollable-tab-view'
  }
  ```
3. In your react-native code, you would be using it like this-
  ```
  import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

  render() {
    return (
      <ScrollableTabView renderTabBar={() => <ScrollableTabBar
        activeTextColor="#fff"
        backgroundColor="#ac3b56"
        inactiveTextColor="#eee9e9"
      />}>
        <Rank tabLabel="Rank" />
        <Score tabLabel="Score" />
        <Rate tabLabel="Rate" />
      </ScrollableTabView>
    );
  }
  ```
  4. This is very basic version and only above props are supported. PRs are welcome.