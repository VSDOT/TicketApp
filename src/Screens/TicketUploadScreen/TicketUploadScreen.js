import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import Check from 'react-native-vector-icons/dist/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function TicketUploadScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StatusBar backgroundColor={'#1bc0f6'} />
        <View
          className="items-center justify-between p-4"
          style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            className=""
            name="arrow-left-long"
            size={wp(6)}
            color="white"
          />
          <Text
            className="text-center text-white"
            style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(4)}}>
            A/C Details
          </Text>
          <Text style={{color: '#1bc0f6'}}>1.3</Text>
        </View>
        {/* Card detail Inputs */}
        <View
          className="bg-white rounded-xl border-2 border-gray-100"
          style={{shadowColor: 'black', elevation: 30 , marginVertical : wp(8) , paddingHorizontal : wp(5) , marginHorizontal : wp(2)}}>
          <View className="bg-white mt-5 space-y-4">
            <Text
              className=""
              style={{fontFamily: 'Montserrat-SemiBold', color: '#1bc0f6' , fontSize : wp(3)}}>
              Enter your Account Details
            </Text>
            <TextInput
              style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3) , paddingVertical : wp(2)}}
              className="w-full border-2 border-gray-300 rounded-md px-4 text-black"
              placeholder="Enter Aadhar no"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3) , paddingVertical : wp(2)}}
              className="w-full border-2 border-gray-300 rounded-md px-4 text-black"
              placeholder="Enter Account no"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3) , paddingVertical : wp(2)}}
              className="w-full border-2 border-gray-300 rounded-md px-4 text-black"
              placeholder="Enter Account IFC no"
              placeholderTextColor={'black'}
            />
            <TextInput
              style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3) , paddingVertical : wp(2)}}
              className="w-full border-2 border-gray-300 rounded-md px-4 text-black"
              placeholder="Account link Mobile no"
              placeholderTextColor={'black'}
            />
            <View className="items-center justify-center">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TicketUploaderTabScreen');
                }}
                style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                className="items-center justify-center rounded-md w-full py-3 mb-5 space-x-2">
                <Check name="shield-checkmark" size={25} color="white" />
                <Text
                  className="text-white"
                  style={{fontSize: wp(4), fontFamily: 'Montserrat-SemiBold'}}>
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="items-center justify-between">
            <View className="border-b-2 border-gray-300 w-full"></View>
            <View className="relative bottom-3">
              <Text
                className="bg-white px-2 text-gray-500"
                style={{fontFamily: 'Montserrat-Medium'}}>
                OR
              </Text>
            </View>
          </View>
          <View>
            <Text
              className=""
              style={{fontFamily: 'Montserrat-SemiBold', color: '#1bc0f6' , fontSize : wp(3)}}>
              Connect your UPI App & ID
            </Text>
            <View className="flex-row items-center justify-center space-x-4 m-2">
              <View className="border-2 border-gray-300 rounded-full p-3">
                <Image
                  source={require('../../assets/Images/Gpay.png')}
                  style={{width: 30, height: 30}}
                />
              </View>
              <View className="border-2 border-gray-300 rounded-full p-3">
                <Image
                  source={require('../../assets/Images/PhonePay.png')}
                  style={{width: 30, height: 30}}
                />
              </View>
              <View className="border-2 border-gray-300 rounded-full p-3">
                <Image
                  source={require('../../assets/Images/Paytm-Icon.png')}
                  style={{width: 30, height: 30, resizeMode: 'contain'}}
                />
              </View>
            </View>
            <Text
              className="text-black px-2"
              style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3)}}>
              Know More
            </Text>
            <View className="my-2 space-y-3">
              <TextInput
                style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3) , paddingVertical : wp(2)}}
                className="w-full border-2 border-gray-300 rounded-md px-4 text-black"
                placeholder="Enter VPA"
                placeholderTextColor={'black'}
              />
              <TextInput
                style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3) , paddingVertical : wp(2)}}
                className="w-full border-2 border-gray-300 rounded-md px-4 text-black"
                placeholder="Enter Mobile No / UPI ID"
                placeholderTextColor={'black'}
              />
              <View className="items-center justify-center">
                <TouchableOpacity
                  style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                  className="items-center justify-center rounded-md w-full py-3 mb-5 space-x-2">
                  <Check name="shield-checkmark" size={25} color="white" />
                  <Text
                    className="text-white"
                    style={{fontSize: wp(4), fontFamily: 'Montserrat-SemiBold'}}
                    onPress={() => {
                      navigation.navigate('TicketUploaderTabScreen');
                    }}>
                    Proceed
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
