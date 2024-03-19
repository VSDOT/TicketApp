import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import ProfileTerms1 from '../ProfileTerms1';
import ProfileTerms2 from '../ProfileTerms2';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
export default function ProfileTermsTopBar() {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar backgroundColor="#1bc0f6" />
      <View
        className="items-center justify-between p-5"
        style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          className=""
          name="angle-left"
          size={25}
          color="white"
        />
        <Text
          className="text-center text-white"
          style={{fontFamily: 'Montserrat-SemiBold' , fontSize : hp(2.5)}}>
          Terms & Condition
        </Text>
        <Text style={{color: '#1bc0f6'}}>1.</Text>
      </View>
      <Tab.Navigator
        initialRouteName="Terms & Conditions"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#f2f7fd',
          },
          tabBarActiveTintColor: '#1bc0f6',
          tabBarLabelStyle: {fontSize: hp(1.5) , fontFamily: 'Montserrat-SemiBold' },
        }}>
        <Tab.Screen name="Terms & Conditions" component={ProfileTerms1} />
        <Tab.Screen name="Privacy policy" component={ProfileTerms2} />
      </Tab.Navigator>
    </View>
  );
}
