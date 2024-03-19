import {View, Text} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-virtualized-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ProfileTerms1() {
  return (
    <ScrollView className="mx-2 my-5 space-y-6">
      <View>
        <Text
          className="mb-5 text-gray-500"
          style={{fontSize: hp(2), fontFamily: 'Montserrat-SemiMedium'}}>
          Login
        </Text>
        <Text
          className="text-gray-500"
          style={{fontSize: hp(2), fontFamily: 'Montserrat-SemiMedium'}}>
          Where can the customers look for information
        </Text>
        <Text
          className="text-gray-500"
          style={{fontSize: hp(2), fontFamily: 'Montserrat-SemiMedium'}}>
          regarding the Movies , Sports
        </Text>
        <Text
          className="text-gray-500"
          style={{fontSize: hp(2), fontFamily: 'Montserrat-SemiMedium'}}>
          and other events .
        </Text>
      </View>
      <Text
        className="text-gray-500"
        style={{fontSize: hp(2), fontFamily: 'Montserrat-SemiMedium'}}>
        offers
      </Text>
      <Text
        className="text-gray-500"
        style={{fontSize: hp(2), fontFamily: 'Montserrat-Medium'}}>
        Ticket Booking
      </Text>
      <Text
        className="text-gray-500"
        style={{fontSize: hp(2), fontFamily: 'Montserrat-Medium'}}>
        Payments
      </Text>
      <Text
        className="text-gray-500"
        style={{fontSize: hp(2), fontFamily: 'Montserrat-Medium'}}>
        Seller and Buyer History
      </Text>
      <Text
        className="text-gray-500"
        style={{fontSize: hp(2), fontFamily: 'Montserrat-Medium'}}>
        Email / SMS
      </Text>
    </ScrollView>
  );
}
