import React from 'react';
import { View, StyleSheet } from 'react-native';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

import ScrollableTabBar from './ScrollableTabBar';

class ScrollableTabView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    this.goToPage = this.goToPage.bind(this);
  }

  renderScrollableTab(props) {
    if (this.props.renderTabBar) {
      return React.cloneElement(this.props.renderTabBar(), props);
    }
    return <ScrollableTabBar { ...props} />
  }

  renderContent() {
    return (
      <SwipeableViews 
        index={this.state.currentPage} onChangeIndex={this.goToPage}>
        {this.props.children}
      </SwipeableViews>
    );
  }

  goToPage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    const tabs = [];
    React.Children.map(this.props.children, (child) => {
      tabs.push(child.props.tabLabel);
    });
    const tabBarProps = {
      goToPage: this.goToPage,
      tabs,
      activeTab: this.state.currentPage
    };
    return (
      <View style={styles.container}>
        {this.renderScrollableTab(tabBarProps)}
        {this.renderContent()}
      </View>
    );
  }
}

ScrollableTabView.propTypes = {
  renderTabBar: PropTypes.any,
  children: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ScrollableTabView;
export {ScrollableTabBar};
