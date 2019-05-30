import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeNavigator from './stackRouteHome'
import CartScreen from '../screen/cart';

const color = "#373737";
const activeColor = "#F15C53";
const AppRouting = createBottomTabNavigator({
    Home:{
        screen: HomeNavigator,
        navigationOptions: {
            title: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="ios-home"
                  size={24}
                  iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                  color={activeColor}
                />
              ) : (
                <Ionicons
                  name="ios-home"
                  size={24}
                  iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                  color={color}
                />
              )
          }
    },
    CartScreen:{
        screen: CartScreen,
        navigationOptions: {
            title: "Cart",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="ios-cart"
                  size={24}
                  iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                  color={activeColor}
                />
              ) : (
                <Ionicons
                  name="ios-cart"
                  size={24}
                  iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                  color={color}
                />
              )
          }
    },
},
{
    removeClippedSubviews : true,
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    lazy: true,
    tabBarOptions: {
        swipeEnabled: true,
        showLabel: true,
        showIcon: true,
        labelStyle : {
            fontSize: 12,
            fontWeight: '300'
        },
        activeTintColor : activeColor,
        style: {
            elevation: 0,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F5',
            backgroundColor: '#fff',
            paddingTop: 5,
        },
        indicatorStyle: {
            backgroundColor: '#fff',
        },
    },
  }
)


export default AppRouting;