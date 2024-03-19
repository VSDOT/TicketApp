import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-virtualized-view';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Upload from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Wallet from 'react-native-vector-icons/dist/Fontisto';
import Cross from 'react-native-vector-icons/dist/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function MovieTicketUploader() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
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
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="items-center justify-center py-3 space-x-2"
        style={{flexDirection: 'row'}}>
        <Searchbar
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
          inputStyle={{
            fontSize: wp(3),
            color: 'gray',
            borderRadius: 20,
            paddingBottom: 20,
            fontFamily: 'Montserrat-Medium',
          }}
          style={{
            borderRadius: 10,
            backgroundColor: '#f1f1f9',
            width: windowWidth > 500 ? 430 : 300,
            height: windowHeight > 600 ? 48 : 56,
            shadowColor: 'gray',
          }}
        />
        <View>
          <Icon name="location-dot" size={25} color="black" />
        </View>
      </View>
      <ScrollView>
        <View className="items-center my-1">
          <Image
            style={{
              width: windowWidth > 500 ? 490 : 340,
              height: windowHeight > 600 ? 180 : 300,
              borderRadius: 10,
              resizeMode: 'stretch',
            }}
            source={require('../../assets/TheaterImg.jpg')}
          />
        </View>
        {/* Buy Ticket Button */}
        <View className="items-center justify-center mx-10 my-3">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
            className="items-center justify-center rounded-full w-full py-3 space-x-2">
            <Icon name="cart-arrow-down" size={25} color="white" />
            <Text
              className="text-white"
              style={{fontSize: wp(4), fontFamily: 'Montserrat-SemiBold'}}>
              Buy Tickets
            </Text>
          </TouchableOpacity>
        </View>
        {/* Add Ticket Header */}
        <View
          className="items-center justify-between px-5 py-2 border-t border-b border-gray-200"
          style={{flexDirection: 'row'}}>
          <View className="items-center space-y-1">
            <Text
              className="text-black"
              style={{fontFamily: 'Montserrat-SemiBold', fontSize: wp(4)}}>
              Recent added tickets
            </Text>
            <View className="flex-row items-center space-x-1">
              <Wallet name="wallet" size={15} color="gray" />
              <Text
                className="text-gray-400"
                style={{fontFamily: 'Medium' , fontSize : wp(3)}}>
                A/C No : 12345678790
              </Text>
            </View>
          </View>
          <View className="items-center justify-center">
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              style={{flexDirection: 'row', borderColor: '#1bc0f6'}}
              className="items-center justify-center p-3 rounded-md border-2 space-x-2">
              <Wallet name="ticket-alt" size={20} color="black" />
              <Text
                className="text-black"
                style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(3)}}>
                Add Tickets
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Add Ticket Screen */}
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}>
          <KeyboardAvoidingView
            className="flex-1"
            style={{backgroundColor: 'white'}}>
            <ScrollView>
              <View
                className="items-center justify-between p-4"
                style={{flexDirection: 'row', backgroundColor: '#1bc0f6'}}>
                <Icon
                  onPress={() => setIsModalVisible(false)}
                  className=""
                  name="arrow-left-long"
                  size={wp(5)}
                  color="white"
                />
                <Text
                  className="text-center text-white"
                  style={{fontFamily: 'Montserrat-SemiBold' , fontSize : wp(4)}}>
                  Add Your Tickets
                </Text>
                <Text style={{color: '#1bc0f6'}}>1.3</Text>
              </View>
              <View
                className="m-2 p-3 bg-white rounded-md space-y-3"
                style={{shadowColor: 'gray', elevation: 20}}>
                <Text
                  className="text-md mx-2"
                  style={{fontFamily: 'Montserrat-SemiBold', color: '#1bc0f6' , fontSize : wp(3)}}>
                  Enter Your Ticket Details
                </Text>
                <TextInput
                  className="w-full border-2 border-gray-300 rounded-md px-4"
                  placeholder="Theater Name"
                  placeHolderColor={'black'}
                  style={{fontFamily: 'Montserrat-SemiBold'}}
                />
                <TextInput
                  className="w-full border-2 border-gray-300 rounded-md px-4"
                  placeholder="Movie Name"
                  placeHolderColor={'black'}
                  style={{fontFamily: 'Montserrat-SemiBold'}}
                />
                <View className="flex-row items-center justify-between mx-2">
                  <Text
                    className="text-md text-black"
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    Show Time
                  </Text>
                  <TextInput
                    className="border-2 border-gray-300 rounded-md w-64 px-3"
                    placeholder="Movie Name"
                    placeHolderColor={'black'}
                    style={{fontFamily: 'Montserrat-SemiBold'}}
                  />
                </View>
                <View className="flex-row items-center justify-between mx-2">
                  <Text
                    className="text-md text-black"
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    Ticket Count
                  </Text>
                  <TextInput
                    className="border-2 border-gray-300 rounded-md w-64 px-3"
                    placeholder="3"
                    placeHolderColor={'black'}
                    style={{fontFamily: 'Montserrat-SemiBold'}}
                  />
                </View>
                <View className="flex-row items-center justify-between mx-2">
                  <Text
                    className="text-md text-black"
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    Ticket Price
                  </Text>
                  <TextInput
                    className="border-2 border-gray-300 rounded-md w-64 px-3"
                    placeholder="₹ 120"
                    placeHolderColor={'black'}
                    style={{fontFamily: 'Montserrat-SemiBold'}}
                  />
                </View>
                <View className="flex-row items-center justify-between mx-2">
                  <Text
                    className="text-md w-24 text-black"
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    User Ticket Price
                  </Text>
                  <TextInput
                    className="border-2 border-gray-300 rounded-md w-64 px-3"
                    placeholder="₹ 140"
                    placeHolderColor={'black'}
                    style={{fontFamily: 'Montserrat-SemiBold'}}
                  />
                </View>
                <TextInput
                  className="w-full border-2 border-gray-300 rounded-md px-4"
                  placeholder="AddLocation"
                  placeHolderColor={'black'}
                  style={{fontFamily: 'Montserrat-SemiBold'}}
                />
                <View className="bg-white rounded-md p-20"></View>
                <View className="items-center justify-center">
                  <TouchableOpacity
                    onPress={() => setIsModalVisible2(true)}
                    style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                    className="items-center justify-center rounded-md w-full py-3 mb-5 space-x-2">
                    <Text
                      className="text-white"
                      style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </Modal>
        {/* Continue Upload  */}
        <Modal
          transparent={true}
          visible={isModalVisible2}
          animationType="slide"
          onRequestClose={() => setIsModalVisible2(false)}>
          <KeyboardAvoidingView
            className="flex-1 justify-end"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <View className="bg-white rounded-tl-xl rounded-tr-xl">
              <View className="m-3 flex-row justify-between items-center mx-5">
                <Text
                  className="text-black mr-10"
                  style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                  Terms & Conditions
                </Text>
                <TouchableOpacity
                  className="bg-black rounded-full items-center"
                  onPress={() => setIsModalVisible2(false)}>
                  <Cross name="cross" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <View className="mx-4 my-2">
                <View className="border-b-2 border-gray-300 p-3">
                  <Text
                    className="text-gray-500"
                    style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                    I change my mind about making this purchase
                  </Text>
                </View>
                <View className="border-b-2 border-gray-300 p-3">
                  <Text
                    className="text-gray-500"
                    style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                    I did not the payment option I was looking for
                  </Text>
                </View>
                <View className="border-b-2 border-gray-300 p-3">
                  <Text
                    className="text-gray-500"
                    style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                    others ( Please mention )
                  </Text>
                </View>
                <View className="border-b-2 border-gray-300 p-3">
                  <Text
                    className="text-gray-500"
                    style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                    others ( Please mention )
                  </Text>
                </View>
              </View>
              <View
                className="p-5 mt-4 items-center space-y-4"
                style={{shadowColor: 'gray', elevation: 30}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TicketUploadFormat');
                  }}
                  style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                  className="items-center justify-center rounded-md w-full py-4 space-x-3">
                  <Text
                    className="text-white"
                    style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}>
                    ok
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
