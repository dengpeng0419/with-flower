/**
 * 首页
 */

import React, { Component } from 'react';
import { Button, Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      swiperShow: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            swiperShow: true,
        });
    }, 0)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.renderBanner()}
        <Text>Home</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }

  // 轮播图
  renderBanner() {
    if (this.state.swiperShow) {
      return (
        <Swiper
          style={styles.wrapper}
          height={width * 40 / 75}
          showsButtons={false}
          autoplay={true}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          removeClippedSubviews={false} // 解决只显示一张图片的问题
          activeDotStyle={styles.activeDotStyle}>
          <Image source={require('../../static/img/1.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/2.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/3.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/4.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/3.jpg')} style={styles.bannerImg} />
        </Swiper>
      )
    } else {
      return (
        <View style={{ height: width * 40 / 75 }}>
          <Image source={require('../../static/img/1.jpg')} style={styles.bannerImg} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: width,
  },
  paginationStyle: {
    //bottom: 6,
    top: 0,
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0,
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  bannerImg: {
    height: width * 40 / 75,
    width: width,
  }
})