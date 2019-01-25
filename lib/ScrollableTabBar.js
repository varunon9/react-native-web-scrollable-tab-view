import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

import Button from './Button';

class ScrollableTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.renderTab = this.renderTab.bind(this);
  }

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return <Button
      key={`${name}_${page}`}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab]}>
        <Text style={[{ color: textColor, fontWeight }]}>
          {name}
        </Text>
      </View>
    </Button>;
  }

  render() {
    return <View
      style={[styles.container, {
        backgroundColor: this.props.backgroundColor 
      }]}
    >
      <ScrollView
        automaticallyAdjustContentInsets={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
      >
        <View
          style={[styles.tabs]}>
          {this.props.tabs.map((name, page) => {
            const isTabActive = this.props.activeTab === page;
            const renderTab = this.renderTab;
            return renderTab(name, page, isTabActive, this.props.goToPage);
          })}
        </View>
      </ScrollView>
    </View>;
  }
}

ScrollableTabBar.defaultProps = {
  activeTextColor: 'navy',
  inactiveTextColor: 'black',
  backgroundColor: null
};

ScrollableTabBar.propTypes = {
  goToPage: PropTypes.func,
  activeTab: PropTypes.number,
  backgroundColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  tabs: PropTypes.array
};

const styles = StyleSheet.create({
  tab: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc'
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

export default ScrollableTabBar;
