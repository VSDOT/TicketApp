import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function TicketBookingScreen({route}) {
  const navigation = useNavigation();
  const {movieName, MoviePrice, MovieLocation, MovieImage, count} =
    route.params;
  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView>
        <StatusBar backgroundColor="#ffffff" />
        <View
          className="items-center justify-between pt-2 mx-3"
          style={{flexDirection: 'row'}}>
          <Icon
            onPress={() => {
              navigation.goBack();
            }}
            className=""
            name="angle-left"
            size={30}
            color="black"
          />
          <Text
            className="text-center text-black flex-1 pl-10"
            style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>
            Booking Start
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
              className="relative bottom-2 items-center justify-between mx-12 my-4"
              style={{flexDirection: 'row'}}>
              <View className="items-left justify-around w-48 space-y-1 mt-1">
                <Text
                  className="text-xl"
                  style={{color: '#1bc0f6', fontFamily: 'Montserrat-Medium'}}>
                  {movieName}
                </Text>
                <Text
                  className="text-md text-gray-500"
                  style={{fontFamily: 'Montserrat-Medium'}}>
                  {MovieLocation}
                </Text>
              </View>
              <Image
                source={MovieImage}
                alt="MovieImage"
                style={{height: 50, width: 80}}
              />
            </View>
            <View className="relative bottom-3 mt-2">
              <View
                className="items-center justify-evenly mx-6 mt-2"
                style={{flexDirection: 'row'}}>
                <View>
                  <Text
                    className="text-xl text-black"
                    style={{fontFamily: 'Montserrat-Medium'}}>
                    Ticket Count
                  </Text>
                  <Text
                    className="text-xs text-gray-500"
                    style={{fontFamily: 'Montserrat-Medium'}}>
                    Each Ticket {MoviePrice}
                  </Text>
                </View>
                <View
                  className="items-center space-x-2"
                  style={{flexDirection: 'row'}}>
                  <TouchableOpacity className="bg-blue-200 px-1.5 py-1 rounded-full">
                    <Icon name="minus" size={15} color="black" />
                  </TouchableOpacity>
                  <Text
                    className="text-gray-500"
                    style={{fontFamily: 'Montserrat-Medium'}}>
                    {count}
                  </Text>
                  <TouchableOpacity className="bg-blue-200 px-1.5 py-1 rounded-full">
                    <Icon name="plus" size={15} color="black" />
                  </TouchableOpacity>
                </View>
                <Text
                  className="text-green-400"
                  style={{fontFamily: 'Montserrat-Medium', fontSize: 19}}>
                  {MoviePrice}
                </Text>
              </View>
              <View
                className="items-center justify-center relative mt-3 space-x-2"
                style={{flexDirection: 'row'}}>
                <Icon name="location-dot" size={15} color="black" />
                <Text
                  className="text-center text-gray-500"
                  style={{fontFamily: 'Montserrat-Medium'}}>
                  {MovieLocation}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* Location Box */}
        <View className="py-16">
          <Text className="text-white">....</Text>
        </View>
        <View className="items-center mt-80 mx-2 mb-10">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CompleteBooking', {
                MovieName: movieName,
                moviePrice: MoviePrice,
                movieImage: MovieImage,
                movieLocation: MovieLocation,
                Count: count,
              });
            }}
            style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
            className="items-center justify-center rounded-md w-full py-3">
            <Text
              className="text-white"
              style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
