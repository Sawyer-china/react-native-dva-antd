import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import Ionicons from 'react-native-vector-icons/Ionicons'

// @connect()  es7 的语法 修饰器 如果对这个不是很了解请看 阮大爷的 教程  http://es6.ruanyifeng.com/
@connect()
class Home extends Component {
    static navigationOptions = {
        title: 'User',
        tabBarLabel: '会员中心',
        tabBarIcon: ({ tintColor, focused }) =>
            // focused 当前 tab 被选择  !focused  未被选中
            // tintColor tabNavigator 传入的配置颜色
            <Ionicons
                name={focused ? 'ios-person' : 'ios-person-outline'}
                size={26}
                style={{ color: tintColor }}
            />
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 20 }}>会员中心</Text>
                <Button type="warning">我要登录</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 32,
        height: 32
    }
})

export default Home