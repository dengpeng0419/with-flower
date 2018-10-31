/**
 * 首页
 */

import React, { Component } from 'react';
import { Button, Text, View, Dimensions, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
const bWidth = width*0.03;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      swiperShow: false,
      articles: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
            swiperShow: true,
            articles: [1,2,3]
        });
    }, 0)
  }

  render() {
    return (
      //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{backgroundColor: '#F9FAFB', flex:1, flexDirection: 'column'}}>
        {this.renderBanner()}
        {this.renderIcons()}
        {this.renderDaily()}
        {this.renderAticle()}
      </ScrollView>
    );
  }

  // 轮播图
  renderBanner() {
    if (this.state.swiperShow) {
      return (
        <View style={{width:width, flex:1, paddingLeft: width*0.03, backgroundColor: '#fff'}}>
        <Swiper
          style={styles.wrapper}
          height={width * 30 / 75}
          showsButtons={false}
          showsPagination = {false}
          autoplay={true}
          //paginationStyle={styles.paginationStyle}
          // dotStyle={styles.dotStyle}
          removeClippedSubviews={false} // 解决只显示一张图片的问题
          //activeDotStyle={styles.activeDotStyle}
          >
          <Image source={require('../../static/img/1.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/2.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/3.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/4.jpg')} style={styles.bannerImg} />
          <Image source={require('../../static/img/3.jpg')} style={styles.bannerImg} />
        </Swiper>
        </View>
      )
    } else {
      return (
        <View style={styles.wrapper}>
          <Image source={require('../../static/img/1.jpg')} style={styles.bannerImg} />
        </View>
      );
    }
  }

  renderIcons() {
    return (
      <View style={styles.icons}>
        <View>
          <View style={styles.iconView1}>
            <Image source={require('../../static/img/pic.png')} style={styles.iconImg}/>
          </View>
          <Text style={styles.iconText}>晒图</Text>
        </View>
        <View>
          <View style={styles.iconView2}>
            <Image source={require('../../static/img/note.png')} style={styles.iconImg}/>
          </View>
          <Text style={styles.iconText}>发文</Text>
        </View>
        <View>
          <View style={styles.iconView3}>
            <Image source={require('../../static/img/search.png')} style={styles.iconImg}/>
          </View>
          <Text style={styles.iconText}>识花</Text>
        </View>
        <View>
          <View style={styles.iconView4}>
            <Image source={require('../../static/img/shop.png')} style={styles.iconImg}/>
          </View>
          <Text style={styles.iconText}>集市</Text>
        </View>
        <View>
          <View style={styles.iconView5}>
            <Image source={require('../../static/img/remind.png')} style={styles.iconImg}/>
          </View>
          <Text style={styles.iconText}>提醒</Text>
        </View>
      </View>
    );
  }

  renderDaily() {
    return (
      <View style={styles.dailyCard}>
        <View style={styles.cardLeft}>
          <View style={{flex:1,flexDirection: 'row',}}>
            <View style={{width:4,height:16,backgroundColor:'#7595CF'}}></View>
            <Text style={{paddingLeft: 10,color:'#626364'}}>日签</Text>
          </View>
          <Text style={{fontSize:20}}>OCT 28</Text>
        </View>
        <View style={styles.cardRight}>
          <Text style={{color:'#626364',lineHeight:16}}>理想你今年几岁，你总是诱惑着年轻的朋友</Text>
          <Text style={{textAlign:'right',color:'#626364'}}>《理想》</Text>
        </View>
      </View>
    )
  }

  renderAticle() {
    return (
      <View>
        <FlatList
          data={[{key: 'a1111111'}, {key: 'b11111'}]}
          renderItem={({item}) => 
            <View style={styles.article}>
              <Text style={{fontSize:18}}>你需要知道的事</Text>
              <Image source={require('../../static/img/1.jpg')} style={styles.articleImg}/>
              <Text style={{color:'#626364'}}>带你读懂那些事</Text>
              <Text style={{color:'#626364',fontSize:10}}>9000 阅读 &bull; 571 收藏</Text>
            </View>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: width*0.9,
    height: width * 30 / 75,
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
    height: width * 30 / 75,
    width: width*0.94,
    borderRadius: 3, 
  },
  icons: {
    paddingTop: 20,
    paddingLeft: bWidth,
    paddingBottom: 20,
    paddingRight: bWidth,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  iconView1: {
    width: 46,
    height: 46,
    backgroundColor: '#7495CE',
    borderRadius: 25,
  },
  iconView2: {
    width: 46,
    height: 46,
    backgroundColor: '#C67B7B',
    borderRadius: 25,
  },
  iconView3: {
    width: 46,
    height: 46,
    backgroundColor: '#7677CF',
    borderRadius: 25,
  },
  iconView4: {
    width: 46,
    height: 46,
    backgroundColor: '#6EC7AD',
    borderRadius: 25,
  },
  iconView5: {
    width: 46,
    height: 46,
    backgroundColor: '#CBC175',
    borderRadius: 25,
  },
  iconImg: {
    marginTop: 10,
    marginLeft: 10,
    width: 26,
    height: 26,
  },
  iconText: {
    textAlign: 'center',
    marginTop: 6,
    color: '#5A5B5D',
  },
  dailyCard: {
    height:90, 
    backgroundColor:'#fff',
    margin: bWidth,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardLeft: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardRight: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  article: {
    height:200, 
    backgroundColor:'#fff',
    margin: bWidth,
    marginTop: 0,
    borderRadius: 5,   
    padding: bWidth,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  articleImg: {
    height: 90,
    width: width - 4*bWidth,
    resizeMode:'cover',
  }
})