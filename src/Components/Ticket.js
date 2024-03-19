import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Tag from 'react-native-vector-icons/dist/Entypo';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Ticket({video, MovieName, price, Location, Count}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('TicketBookingScreen', {
          movieName: MovieName,
          MoviePrice: price,
          MovieImage: video,
          MovieLocation: Location,
          count: Count,
        })
      }>
      <ImageBackground
        source={require('../assets/Ticket-Img.png')}
        className="flex-1 items-center justify-center overflow-hidden"
        resizeMode="stretch"
        style={{shadowColor: 'black', height: hp(24), width: wp(50)}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TicketBookingScreen', {
              movieName: MovieName,
              MoviePrice: price,
              MovieImage: video,
              MovieLocation: Location,
              count: Count,
            })
          }>
          <View className="space-y-2 items-center overflow-hidden">
            <View className="bg-gray-300 rounded-xl items-center justify-center space-y-1.5 py-1 px-3.5">
              <View className="bg-red-500 rounded-full">
                <Text
                  className="text-white px-2"
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: hp(1.3),
                  }}>
                  1.30pm
                </Text>
              </View>
              <Icon name="circle-play" size={30} color="white" />
              <Text
                className="text-black"
                style={{fontFamily: 'Montserrat-SemiBold', fontSize: hp(1.3)}}>
                Ticket : 3
              </Text>
            </View>
            <View
              className="items-center justify-center space-x-8 mb-2"
              style={{flexDirection: 'row'}}>
              <Text
                className="text-black text-md"
                style={{color: '#1bc0f6', fontFamily: 'Montserrat-Medium'}}>
                {MovieName}
              </Text>
              <Text
                className="text-black text-md"
                style={{fontFamily: 'Montserrat-Medium'}}>
                {price}
              </Text>
            </View>
            <View className="space-x-1 mx-2" style={{flexDirection: 'row'}}>
              <Icon
                name="location-dot"
                size={10}
                color="black"
                style={{marginTop: 2}}
              />
              <Text
                className="text-black"
                style={{fontFamily: 'Montserrat-Medium', fontSize: 11}}>
                {Location}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
