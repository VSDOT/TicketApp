import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {Searchbar} from 'react-native-paper';
import File from 'react-native-vector-icons/dist/AntDesign';
import Alert from 'react-native-vector-icons/dist/Feather';
import {ScrollView} from 'react-native-virtualized-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function TicketDetailScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Responsive Screen
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setDimensions({window});
    });
    return () => subscription?.remove();
  });

  const {window} = dimensions;
  let windowWidth = window.width;
  let windowHeight = window.height;
  // Responsive Screen

  const MovieTickets = [
    {
      id: 1,
      title: 'Got',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 2,
      title: 'Avengers',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 3,
      title: 'Hulk',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 4,
      title: 'Super Man',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 5,
      title: 'Bat Man',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 6,
      title: 'Black Panther',
      Details: 'ahamed@gmail.com',
    },
    {
      id: 7,
      title: 'Spider Man',
      Details: 'ahamed@gmail.com',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <StatusBar backgroundColor="#1bc0f6" />
        <View
          className="items-center justify-between py-5 px-3"
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
            Ticket Details
          </Text>
          <View className="items-center justify-center">
            <Text style={{color: '#1bc0f6'}}>1:</Text>
          </View>
        </View>
        <View
          className="items-center py-3"
          style={{backgroundColor: '#f2f7fd'}}>
          <Searchbar
            className='border border-gray-300'
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            inputStyle={{
              fontSize: hp(2),
              color: 'gray',
              borderRadius: 20,
              fontFamily : 'Montserrat-Medium',
              alignSelf : 'center'
            }}
            style={{
              borderRadius: 10,
              backgroundColor: '#f6f6f6',
              width: windowWidth > 500 ? hp(80) : wp(80),
              height: windowHeight > 600 ? hp(6) : hp(6),
              shadowColor: 'gray'
            }}
          />
        </View>
        <View
          className="items-center justify-around bg-gray-100 py-3"
          style={{flexDirection: 'row'}}>
          <Text className="text-black" style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>Ticket</Text>
          <Text className="text-black" style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>Send It</Text>
        </View>
        <View className="items-center pt-3">
          <FlatList
            numColumns={1}
            className="w-full px-5"
            data={MovieTickets}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View
                className="items-center justify-between space-x-10 py-4 overflow-hidden border-b border-gray-200"
                style={{flexDirection: 'row'}}>
                <View className='space-x-2 items-center' style={{flexDirection: 'row'}}>
                  <File name="pdffile1" size={25} color="black" />
                  <Text className='text-black' style={{ fontFamily : 'Montserrat-SemiBold' , fontSize : hp(1.8) }}>{item.title}</Text>
                </View>
                <Text className='text-gray-500' style={{fontSize : hp(1.5) , fontFamily : 'Montserrat-SemiBold' }}>{item.Details}</Text>
              </View>
            )}
            ListEmptyComponent={
              <View
                className="mt-20 items-center justify-center space-x-4"
                style={{flexDirection: 'row'}}>
                <Alert name="alert-circle" size={30} color="gray" />
                <Text>No Items Found</Text>
              </View>
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
