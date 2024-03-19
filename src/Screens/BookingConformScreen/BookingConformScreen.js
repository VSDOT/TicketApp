import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Tick from 'react-native-vector-icons/dist/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function BookingConformScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StatusBar backgroundColor="#1bc0f6" />
        <View
          className="items-center justify-between py-3 px-3"
          style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
          <Icon
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            className=""
            name="angle-left"
            size={25}
            color="white"
          />
          <Text
            className="text-center text-white text-xl flex-1 pl-10"
            style={{fontFamily: 'Montserrat-SemiBold'}}>
            Booking Confirmation
          </Text>
          <View className="items-center justify-center">
            <Text style={{color: '#1bc0f6'}}>1:30pm</Text>
          </View>
        </View>
        <View className="items-center space-y-6 border-b-2 border-gray-300 py-8 mx-6">
          <View
            className="items-center rounded-full p-5"
            style={{backgroundColor: '#1bc0f6'}}>
            <Tick name="check" size={100} color="white" />
          </View>
          <Text
            className="text-green-500 text-2xl"
            style={{fontFamily: 'Montserrat-SemiBold'}}>
            Ticket Booking Successful
          </Text>
          <View>
            <Text
              className="text-gray-500 text-center"
              style={{fontFamily: 'Montserrat-Medium'}}>
              Your payment has been processed !
            </Text>
            <Text
              className="text-gray-500 text-center"
              style={{fontFamily: 'Montserrat-Medium'}}>
              Details of transaction is included below
            </Text>
          </View>
        </View>
        <View className="items-center m-3">
          <Text
            className="text-center text-blue-500 text-md"
            style={{fontFamily: 'Montserrat-SemiBold'}}>
            Transaction no : 1234567890
          </Text>
          <View className="items-center border-2 border-gray-200 rounded-xl w-full p-16 m-5"></View>
        </View>
        {/* Payment details */}
        <View className="mx-6">
          <View className="flex-row justify-between items-center border-b-2 border-gray-300 p-4">
            <Text
              className="text-black text-center"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              Total Amount Paid
            </Text>
            <Text
              className="text-black text-center"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              ₹240.04
            </Text>
          </View>
          <View className="flex-row justify-between items-center border-b-2 border-gray-300 p-4">
            <Text
              className="text-black text-center"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              Paid by
            </Text>
            <Text
              className="text-black text-center"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              Paytm
            </Text>
          </View>
          <View className="flex-row justify-between items-center border-b-2 border-gray-300 p-4">
            <Text
              className="text-black text-center"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              Transaction Date
            </Text>
            <Text
              className="text-black text-center"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              26.02.2024
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
