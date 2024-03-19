import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Social from 'react-native-vector-icons/dist/FontAwesome';
import Gmail from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Book from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const countryCodes = [
  {code: 'IN', label: 'India'},
  {code: 'US', label: 'United States'},
  // Add more country codes as needed
];

export default function CompleteBooking({route}) {
  let [phoneNumber, setPhoneNumber] = useState('');
  let [selectedCountryCode, setSelectedCountryCode] = useState('IN');
  let [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const {MovieName, moviePrice, movieLocation, movieImage, Count} =
    route.params;

  let handleCountryCodeSelect = code => {
    setSelectedCountryCode(code);
    setModalVisible(false);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView>
        <StatusBar backgroundColor="#ffffff" />
        <View
          className="items-center justify-between pt-2 mx-3"
          style={{flexDirection: 'row'}}>
          <Icon
            onPress={() => {
              navigation.goBack('');
            }}
            className=""
            name="angle-left"
            size={30}
            color="black"
          />
          <Text
            className="text-center text-black flex-1 pl-10"
            style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>
            Complete Your Booking
          </Text>
          <View className="bg-red-500 px-2.5 py-1 rounded-full items-center justify-center">
            <Text
              className="text-white"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              1:30pm
            </Text>
          </View>
        </View>
        <View className="items-center">
          <ImageBackground
            className="w-full"
            source={require('../../assets/Big-Ticket.png')}
            resizeMode="contain"
            style={{
              position: 'relative',
              top: 20,
            }}>
            <View
              className="relative items-center bottom-2 justify-between mx-12 my-3"
              style={{flexDirection: 'row'}}>
              <View className="items-left justify-around w-48 space-y-1 mt-1">
                <Text
                  className="text-xl"
                  style={{color: '#1bc0f6', fontFamily: 'Montserrat-Medium'}}>
                  {MovieName}
                </Text>
                <Text
                  className="text-md text-gray-500"
                  style={{fontFamily: 'Montserrat-Medium'}}>
                  {movieLocation}
                </Text>
              </View>
              <Image
                source={movieImage}
                alt="MovieImage"
                style={{height: 50, width: 80}}
              />
            </View>
            <View className="relative bottom-3 mt-2">
              <View
                className="items-center justify-evenly mx-10 mt-2"
                style={{flexDirection: 'row'}}>
                <View
                  className="items-center space-x-6"
                  style={{flexDirection: 'row'}}>
                  <View>
                    <Text
                      className="text-xl text-black"
                      style={{fontFamily: 'Montserrat-Medium'}}>
                      Selected Tickets
                    </Text>
                    <Text
                      className="text-xs text-gray-500"
                      style={{fontFamily: 'Montserrat-Medium'}}>
                      Each Ticket {moviePrice}
                    </Text>
                  </View>
                  <View className="bg-blue-300 px-2.5 py-1 rounded-full">
                    <Text
                      className="text-black"
                      style={{fontFamily: 'Montserrat-Medium'}}>
                      {Count}
                    </Text>
                  </View>
                </View>
                <Text
                  className="text-xl text-green-400"
                  style={{fontFamily: 'Montserrat-Medium'}}>
                  {moviePrice}
                </Text>
              </View>
              <View
                className="items-center justify-center relative mt-3 space-x-2"
                style={{flexDirection: 'row'}}>
                <Icon name="location-dot" size={15} color="black" />
                <Text
                  className="text-md text-gray-500"
                  style={{fontFamily: 'Montserrat-Medium'}}>
                  {movieLocation}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* Send Ticket Contact */}
        <View className="mx-4 my-8 space-y-2">
          <Text
            className="text-black text-start"
            style={{fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>
            Send it
          </Text>
          <View
            className="items-center bg-white rounded-xl py-4 space-y-5 border border-gray-300"
            style={{shadowColor: 'gray', elevation: 10}}>
            <View className="items-center flex-row space-x-4 ml-10">
              <Social name="whatsapp" size={40} color="lightgreen" />
              <View className="mx-9" style={{flexDirection: 'row'}}>
                {/* Country Code Input */}
                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                  <View className="bg-gray-200 px-5 items-center justify-center rounded-l-md">
                    <Text
                      style={styles.countryCodeLabel}
                      className="text-black">
                      +{selectedCountryCode}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                {/* Phone Number Input */}
                <View className="flex-1">
                  {/* <Text style={styles.countryCodeInputLabel}>Phone Number:</Text> */}
                  <TextInput
                    value={phoneNumber}
                    className="bg-gray-200 py-3 px-1 rounded-r-md"
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                    onChangeText={setPhoneNumber}
                    placeholderTextColor={'black'}
                    style={{fontFamily: 'Montserrat-Medium', fontSize: 12}}
                  />
                </View>
              </View>
            </View>
            <View className="items-center mx-11 flex-row space-x-4">
              <Gmail name="gmail" size={40} color="#1bc0f6" />
              <TextInput
                placeholder="Email"
                className="border bg-gray-200 border-gray-100 w-full rounded-md pl-5"
                value={text}
                onChangeText={setText}
                placeholderTextColor={'black'}
                style={{fontFamily: 'Montserrat-SemiBold', fontSize: 14}}
              />
            </View>
          </View>
        </View>
        {/* Booking Summary */}
        <View className="mx-4">
          <View className="flex-row items-center space-x-1">
            <Book name="book" size={25} color="black" />
            <Text
              className="text-black text-start text-md"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              Booking Summary
            </Text>
          </View>
          <View
            className="px-5 py-3 my-3 border border-gray-300 bg-white rounded-xl"
            style={{shadowColor: 'gray', elevation: 10}}>
            <View className="items-center flex-row justify-between w-full px-6 py-1 border-b border-gray-200">
              <View className="items-start">
                <Text
                  className="text-md text-black"
                  style={{fontFamily: 'Montserrat-SemiBold'}}>
                  Ticket
                </Text>
                <Text
                  className="text-xs text-black"
                  style={{fontFamily: 'Montserrat-SemiBold'}}>
                  2 Ticket @ 240 each
                </Text>
              </View>
              <Text
                className="text-md text-green-300"
                style={{fontFamily: 'Montserrat-SemiBold'}}>
                {moviePrice}
              </Text>
            </View>
            <View className="items-center flex-row justify-between w-full px-6 py-3 border-b border-gray-200">
              <Text
                className="text-md text-black"
                style={{fontFamily: 'Montserrat-SemiBold'}}>
                Taxes & Fees
              </Text>
              <Text
                className="text-md text-green-300"
                style={{fontFamily: 'Montserrat-SemiBold'}}>
                {moviePrice}
              </Text>
            </View>
            <View className="items-center flex-row justify-between w-full px-6 py-3">
              <Text
                className="text-md text-black"
                style={{fontFamily: 'Montserrat-SemiBold'}}>
                Total
              </Text>
              <Text
                className="text-md text-green-300"
                style={{fontFamily: 'Montserrat-SemiBold'}}>
                {moviePrice}
              </Text>
            </View>
          </View>
        </View>
        <View className="items-center justify-center mx-4">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FinalPaymentScreen', {
                MovieName: MovieName,
                movieLocation: movieLocation,
                moviePrice: moviePrice,
              });
            }}
            style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
            className="items-center justify-center rounded-md w-full py-4 my-5">
            <Text
              className="text-white"
              style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}>
              Proceed to Pay
            </Text>
          </TouchableOpacity>
        </View>
        {/* Country Code Modal */}
        <Modal transparent={true} animationType="slide" visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {countryCodes.map(country => (
                <TouchableOpacity
                  key={country.code}
                  onPress={() => handleCountryCodeSelect(country.code)}>
                  <Text style={styles.modalItem}>
                    {country.label} +{country.code}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  countryCodeLabel: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  modalItem: {
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
