import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ProfileHelpFeedback() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1">
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
          style={{fontFamily: 'Montserrat-SemiBold', fontSize: hp(2.5)}}>
          Help & Feedbacks
        </Text>
        <Text style={{color: '#1bc0f6'}}>1.3</Text>
      </View>
      <View className="flex-1 mx-3.5 my-5">
        <View className="space-y-6">
          <View>
            <Text
              className="mb-5 text-gray-500"
              style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
              Login
            </Text>
            <Text
              className="text-gray-500"
              style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
              Where can the customers look for information
            </Text>
            <Text
              className="text-gray-500"
              style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
              regarding the Movies , Sports
            </Text>
            <Text
              className="text-xl text-gray-500"
              style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
              and other events .
            </Text>
          </View>
          <Text
            className="text-gray-500"
            style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
            offers
          </Text>
          <Text
            className="text-gray-500"
            style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
            Ticket Booking
          </Text>
          <Text
            className="text-gray-500"
            style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
            Payments
          </Text>
          <Text
            className="text-gray-500"
            style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
            Seller and Buyer History
          </Text>
          <Text
            className="text-gray-500"
            style={{fontFamily: 'Montserrat-Medium', fontSize: hp(2)}}>
            Email / SMS
          </Text>
        </View>
      </View>
      <View className="bg-gray-200 px-3 py-8" style={{marginTop: hp(30)}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileHelpFeedback2');
          }}
          style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
          className="items-center justify-center rounded-md w-full py-4">
          <Text
            className="text-white"
            style={{fontSize: hp(2.3), fontFamily: 'Montserrat-SemiBold'}}>
            Feedbacks
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
