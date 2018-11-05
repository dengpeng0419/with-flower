/**
 * 社区
 */

'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';

const tab_marigin = 0;

const colorAry = ['gray', 'green', 'blue', 'yellow', 'black'];

const WIDTH = Dimensions.get('window').width;

const tab_w = colorAry.length*80 > WIDTH ? 80 : WIDTH/colorAry.length;

const max_w = (tab_w + tab_marigin) * colorAry.length;


export default class HOME extends React.Component {

    constructor(props) {
        super(props);

        if (this.props.TabWidth) {
            this.WIDTH = this.props.TabWidth;
        } else {
            this.WIDTH = WIDTH;
        }

        this.state = {
            tabArr: [],
        };

    };

    componentDidMount() {
        this._setIndex(0);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View>
                    <FlatList
                        ref={(flatList) => this._flatList = flatList}
                        renderItem={this._renderTabItem}
                        horizontal={true}
                        data={this.state.tabArr}
                        keyExtractor={(item, index) => item.id}/>
                </View>
                <View style={{flex:1}}>
                    <ScrollView style={styles.container}>
                        <View>
                            <ScrollView style={styles.scrollViewStyle}
                                ref={(scrollView) => this._scrollView = scrollView}
                                horizontal={true}
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={this._onAnimationEnd}>
                                {this._renderItem()}
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

    _renderItem() {
        // 数组
        let itemAry = [];
        // 遍历
        for (let i = 0; i < colorAry.length; i++) {
            if(i === 0){
                itemAry.push(
                    <TouchableOpacity activeOpacity={1} key={i}>
                        <FlatList
                            style={styles.hot}
                            horizontal={false}
                            numColumns={2}
                            columnWrapperStyle={{ marginLeft: 0.02*WIDTH, marginTop: 10}}
                            data={[{key: 'a'}, {key: 'b11111'}, {key: 'b1311'}, {key: 'b1'}, {key: 'b'}, {key: 'b1011'}, {key: 'c'}, {key: 'd'}]}
                            renderItem={({item}) => 
                                <View style={styles.hotCard}>
                                    <Image source={require('../../static/img/1.jpg')} style={styles.hotItem}/>
                                    <View style={styles.hotView}>
                                        <Text style={styles.hotText}>爱“膝”家人，更爱“膝”自己！你需要知道</Text>
                                        <View style={styles.hotAuthor}>
                                            <Image source={require('../../static/img/1.jpg')} style={styles.hotIcon}/>
                                            <Text style={styles.hotAuthorName}>若有所失</Text>
                                        </View>
                                    </View>
                                </View>
                            }/>
                    </TouchableOpacity>
                )
            } else {
                itemAry.push(
                    <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
                );
            }
        }
        return itemAry;
    }

    _renderTabItem = (data, index) => {
        if (data.item.selected) {
            return (
                <TouchableOpacity key={index} activeOpacity={1} onPress={(index) => this._tabClick(data.item.id)}>
                    <View style={{
                        backgroundColor: 'white',
                        height: 40,
                        marginLeft: tab_marigin,
                        width: tab_w,
                        justifyContent: 'space-between',
                        alignItems: 'center'}}>
                        <Text style={{paddingTop:10,color: 'tomato'}}>{data.item.title}</Text>
                        <View style={{width:10,height:2,backgroundColor:'tomato'}}></View>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity key={index} activeOpacity={1} onPress={(index) => this._tabClick(data.item.id)}>
                    <View style={{
                        backgroundColor: 'white',
                        height: 40,
                        marginLeft: tab_marigin,
                        width: tab_w,
                        justifyContent: 'space-between',
                        alignItems: 'center'}}>
                        <Text style={{paddingTop:10,color: 'black'}}>{data.item.title}</Text>
                        <View style={{width:10,height:2,backgroundColor:'white'}}></View>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    _tabClick(index) {
        console.log(index,'click')
        this._tabScrollToIndex(index);
        this._scrollView.scrollTo({x: index * WIDTH, y: 0, animated:true});
    }

    _onAnimationEnd = (e) => {
        var offset = e.nativeEvent.contentOffset.x;

        if (offset < 0) {
            return;
        }

        var currentX = Math.floor(offset / WIDTH);

        this._tabScrollToIndex(currentX);
    }

    _tabScrollToIndex(index){

        this._setIndex(index);

        var centerX = this.WIDTH / 2.0;

        var tabOffset = index * (tab_w + tab_marigin)


        var itemX = tabOffset + tab_w / 2.0;

        var scrollX = itemX - centerX;

        if (scrollX < 0) {
            scrollX = 0;
        }

        if (scrollX >= max_w - this.WIDTH) {
            scrollX = max_w - this.WIDTH;
        }

        if (colorAry.length < this.WIDTH/tab_w) {
            scrollX = 0;
        }

        this._flatList.scrollToOffset({offset: scrollX})
    }

    _setIndex(index) {
        if (index >= colorAry.length) {
            return;
        }
        let arr = [];
        for (let i = 0; i < colorAry.length; i++) {
            let tabItem;
            if (i == index) {
                tabItem = {
                    title: colorAry[i],
                    id: i+'',
                    selected: true
                }
            } else {
                tabItem = {
                    title: colorAry[i],
                    id: i+'',
                    selected: false
                }
            }

            arr.push(
                tabItem
            );
        }

        this.setState({
            tabArr: arr,
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    scrollViewStyle: {
        // 背景色
        backgroundColor: '#F9FAFB',
    },
    itemStyle: {
        // 尺寸
        width: WIDTH,
        //height: 300
    },
    hot: {
        width: WIDTH,
        backgroundColor: '#F9FAFB'
    },
    hotCard: {
        width: 0.47*WIDTH,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#F9FAFB'
    },
    hotView: {
        width: 0.47*WIDTH,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#fff'
    },
    hotItem: {
        width: 0.47*WIDTH,
        height: 0.34*WIDTH,
    },
    hotText: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize:16,
    },
    hotAuthor: {
        flex: 1,
        flexDirection: 'row',
    },
    hotIcon: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    hotAuthorName: {
        color:'#626364',
        paddingLeft: 10,
        lineHeight: 20
    }
});
