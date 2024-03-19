import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Cross from 'react-native-vector-icons/dist/Entypo';
import Movie from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import GPay from 'react-native-vector-icons/dist/MaterialIcons';
import Check from 'react-native-vector-icons/dist/Ionicons';
import Card from 'react-native-vector-icons/dist/Fontisto';
import Bank from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {RadioButton, Searchbar} from 'react-native-paper';
import Alert from 'react-native-vector-icons/dist/Feather';

export default function FinalPaymentScreen({route}) {
  const {MovieName, movieLocation} = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);
  const [isModalVisible4, setIsModalVisible4] = useState(false);
  const [value, setValue] = useState('first');
  const [searchQuery, setSearchQuery] = useState('');

  const BankList = [
    {
      id: 1,
      BankImg: require('../../assets/Images/PhonePay.png'),
      BankName: 'State Bank Of India',
    },
    {
      id: 2,
      BankImg: require('../../assets/Images/PhonePay.png'),
      BankName: 'Axis Bank',
    },
    {
      id: 3,
      BankImg: require('../../assets/Images/PhonePay.png'),
      BankName: 'Kotak',
    },
    {
      id: 4,
      BankImg: require('../../assets/Images/PhonePay.png'),
      BankName: 'Union Bank of India',
    },
    {
      id: 5,
      BankImg: require('../../assets/Images/PhonePay.png'),
      BankName: 'Canara Bank',
    },
    {
      id: 6,
      BankImg: require('../../assets/Images/PhonePay.png'),
      BankName: 'DCB Bank',
    },
    {
      id: 7,
      BankImg: require('../../assets/Images/PhonePay.png'),
      BankName: 'State Bank Of India',
    },
  ];

  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white py-10">
      <ScrollView>
        <View className="items-end justify-center mx-5">
          <Cross
            name="cross"
            size={35}
            color="red"
            onPress={() => setIsModalVisible3(true)}
          />
        </View>
        <View className="flex-row items-center justify-center space-x-5 mt-5">
          <Movie name="theater" size={35} color="black" />
          <View>
            <Text
              className="text-md text-black"
              style={{fontFamily: 'Montserrat-Medium'}}>
              {MovieName}
            </Text>
            <Text
              className="text-xs text-black"
              style={{fontFamily: 'Montserrat-Medium'}}>
              {movieLocation}
            </Text>
          </View>
        </View>
        {/* Select Payment Option */}
        <View className="m-5 -mb-1">
          <Text
            className="text-black"
            style={{fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>
            Select Payment Option
          </Text>
          <View
            className="border border-gray-200 p-5 mt-4 rounded-md bg-white"
            style={{shadowColor: 'gray', elevation: 10}}>
            <View className="flex-row items-center space-x-5">
              <GPay name="payment" size={40} color="black" />
              <View>
                <Text
                  className="text-black"
                  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 15}}>
                  Pay Using Payment UPI
                </Text>
                <Text
                  className="text-gray-400 mt-1"
                  style={{fontFamily: 'Montserrat-SemiBold', fontSize: 12}}>
                  VPA : 0000213229242@paytm
                </Text>
              </View>
            </View>
            <View className="items-center justify-center mt-5">
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookingConformScreen');
                }}
                style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                className="items-center justify-center rounded-md w-full py-4 space-x-3">
                <Check name="shield-checkmark" size={25} color="white" />
                <Text
                  className="text-white"
                  style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}>
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* New Payment type */}
        <View
          className="m-5 bg-white rounded-md border border-gray-200"
          style={{shadowColor: 'gray', elevation: 10}}>
          <View className="p-3 space-y-4">
            <Text
              className="text-black"
              style={{fontSize: 15, fontFamily: 'Montserrat-SemiBold'}}>
              New Payment Option
            </Text>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <View className="flex-row items-center justify-between border-b-2 border-gray-300 py-3">
                <View className="flex-row items-center">
                  <Card
                    name="credit-card"
                    size={15}
                    color="black"
                    style={{padding: 12, marginBottom: 10}}
                  />
                  <View className="">
                    <Text
                      className="text-black"
                      style={{fontFamily: 'Montserrat-SemiBold'}}>
                      Prepaid Debit and Credit Cards
                    </Text>
                    <View className="flex-row items-center">
                      <Image
                        source={require('../../assets/Images/Rupay.png')}
                        style={{resizeMode: 'cover', width: 50, height: 20}}
                      />
                      <Image
                        source={require('../../assets/Images/visa.png')}
                        style={{resizeMode: 'contain', width: 35, height: 10}}
                      />
                      <Image
                        source={require('../../assets/Images/mastercard.png')}
                        style={{resizeMode: 'contain', width: 25, height: 15}}
                      />
                      <Text
                        className="text-black ml-2"
                        style={{fontFamily: 'Montserrat-Medium'}}>
                        & more
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <Cross name="chevron-right" size={30} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsModalVisible1(true)}>
              <View className="flex-row items-center justify-between border-b-2 border-gray-300 pb-3">
                <View className="flex-row items-center">
                  <View className="px-1">
                    <Image
                      source={require('../../assets/Images/Rupay-Icon.png')}
                      style={{resizeMode: 'cover', width: 35, height: 30}}
                    />
                  </View>
                  <View className="">
                    <Text
                      className="text-black"
                      style={{fontFamily: 'Montserrat-SemiBold'}}>
                      UPI
                    </Text>
                    <View className="flex-row items-center space-x-1">
                      <Image
                        source={require('../../assets/Images/Gpay.png')}
                        style={{resizeMode: 'contain', width: 20, height: 20}}
                      />
                      <Image
                        source={require('../../assets/Images/Paytm-Icon.png')}
                        style={{resizeMode: 'cover', width: 35, height: 10}}
                      />
                      <Image
                        source={require('../../assets/Images/PhonePay.png')}
                        style={{resizeMode: 'contain', width: 20, height: 15}}
                      />
                      <Text
                        className="text-black ml-2"
                        style={{fontFamily: 'Montserrat-Medium'}}>
                        & more
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <Cross name="chevron-right" size={30} color="black" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsModalVisible2(true)}>
              <View className="flex-row items-center justify-between pb-3">
                <View className="flex-row items-center">
                  <Bank
                    name="bank"
                    size={20}
                    color="black"
                    style={{padding: 10, marginBottom: 2}}
                  />
                  <View className="">
                    <Text
                      className="text-black"
                      style={{fontFamily: 'Montserrat-SemiBold'}}>
                      Net Banking
                    </Text>
                    <View className="flex-row items-center">
                      <Text
                        className="text-gray-500"
                        style={{fontFamily: 'Montserrat-Medium'}}>
                        All Major Bank Supported
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="items-center">
                  <Cross name="chevron-right" size={30} color="black" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Modal screens */}
        {/* card Payment modal */}
        <Modal
          className=""
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}>
          <KeyboardAvoidingView
            className="flex-1 justify-end"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <View className="justify-center bg-white px-1 rounded-tr-2xl rounded-tl-2xl py-4">
              <View className="m-3 flex-row justify-between items-center">
                <Text
                  className="text-black"
                  style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                  Enter Debit or Credit card Details
                </Text>
                <TouchableOpacity
                  className="bg-black rounded-full items-center"
                  onPress={() => setIsModalVisible(false)}>
                  <Cross name="cross" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <View className="items-center px-8">
                <TextInput
                  placeholder="Card Number"
                  className="border-b-2 border-gray-300 w-full px-2 text-md text-black"
                  placeholderTextColor={'black'}
                  style={{fontSize: 15, fontFamily: 'Montserrat-Medium'}}
                />
              </View>
              <View className="flex-row justify-between px-8 space-x-3">
                <View className="flex-1 w-full">
                  <TextInput
                    placeholder="Expiry/Validity"
                    className="border-b-2 border-gray-300 w-full text-md text-black"
                    placeholderTextColor={'black'}
                    style={{fontSize: 15, fontFamily: 'Montserrat-Medium'}}
                  />
                </View>
                <View className="flex-1 w-full">
                  <TextInput
                    placeholder="CCV"
                    className="border-b-2 border-gray-300 w-full text-md text-black"
                    placeholderTextColor={'black'}
                    style={{fontSize: 15, fontFamily: 'Montserrat-Medium'}}
                  />
                </View>
              </View>
              <View className="items-center justify-center mx-5 my-8">
                <TouchableOpacity
                  style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                  className="items-center justify-center rounded-md w-full py-4 space-x-3">
                  <Check name="shield-checkmark" size={25} color="white" />
                  <Text
                    className="text-white"
                    style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}
                    onPress={() => {
                      navigation.navigate('');
                    }}>
                    Pay
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        {/* UPI Payment Screen */}
        <Modal
          transparent={true}
          visible={isModalVisible1}
          animationType="slide"
          onRequestClose={() => setIsModalVisible1(false)}>
          <KeyboardAvoidingView
            className="flex-1 justify-end"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <View className="bg-white rounded-tl-xl rounded-tr-xl">
              <View className="m-3 flex-row justify-between items-center mx-5">
                <Text
                  className="text-black"
                  style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                  Enter UPI Id
                </Text>
                <TouchableOpacity
                  className="bg-black rounded-full items-center"
                  onPress={() => setIsModalVisible1(false)}>
                  <Cross name="cross" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <View className="items-center px-5">
                <TextInput
                  className="border-2 border-gray-300 w-full m-5 rounded-md pl-4 text-black"
                  placeholder="Enter VPA"
                  placeholderTextColor={'black'}
                  style={{fontFamily: 'Montserrat-SemiBold'}}
                />
              </View>
              <View className="items-center justify-between px-2">
                <View className="border-b-2 border-gray-300 w-full"></View>
                <View className="relative bottom-3">
                  <Text
                    className="bg-white px-2 text-gray-500"
                    style={{fontFamily: 'Montserrat-Medium'}}>
                    OR
                  </Text>
                </View>
              </View>
              <View className="items-center px-5">
                <TextInput
                  className="border-2 border-gray-300 w-full rounded-md pl-4 text-black"
                  placeholder="Enter Mobile No / UPI No"
                  placeholderTextColor={'black'}
                  style={{fontFamily: 'Montserrat-SemiBold'}}
                />
              </View>
              <View
                className="bg-gray-100 p-5 mt-4 items-center"
                style={{shadowColor: 'gray', elevation: 30}}>
                <TouchableOpacity
                  style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                  className="items-center justify-center rounded-md w-full py-4 space-x-3">
                  <Check name="shield-checkmark" size={25} color="white" />
                  <Text
                    className="text-white"
                    style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}
                    onPress={() => {
                      navigation.navigate('BookingConformScreen');
                    }}>
                    Pay
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        {/* Net Banking Screen */}
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
                  className="text-black"
                  style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                  Select Your Bank
                </Text>
                <TouchableOpacity
                  className="bg-black rounded-full items-center"
                  onPress={() => setIsModalVisible2(false)}>
                  <Cross name="cross" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <View className="items-center">
                <View className="flex-row items-center space-x-5 my-5">
                  <View className="bg-gray-100 rounded-full p-3 items-center">
                    <Image
                      source={require('../../assets/Images/PhonePay.png')}
                      style={{width: 40, height: 40}}
                    />
                  </View>
                  <View className="bg-gray-100 rounded-full p-3 items-center space-x-2">
                    <Image
                      source={require('../../assets/Images/Paytm-Icon.png')}
                      style={{resizeMode: 'contain', width: 40, height: 40}}
                    />
                  </View>
                  <View className="bg-gray-100 rounded-full p-3 items-center space-x-2">
                    <Image
                      source={require('../../assets/Images/PhonePay.png')}
                      style={{width: 40, height: 40}}
                    />
                  </View>
                  <View className="bg-gray-100 rounded-full p-3 items-center space-x-2">
                    <Image
                      source={require('../../assets/Images/Paytm-Icon.png')}
                      style={{resizeMode: 'contain', width: 40, height: 40}}
                    />
                  </View>
                </View>
                <View className="flex-row items-center space-x-5 my-2">
                  <View className="bg-gray-100 rounded-full p-3 items-center">
                    <Image
                      source={require('../../assets/Images/PhonePay.png')}
                      style={{width: 40, height: 40}}
                    />
                  </View>
                  <View className="bg-gray-100 rounded-full p-3 items-center space-x-2">
                    <Image
                      source={require('../../assets/Images/Paytm-Icon.png')}
                      style={{resizeMode: 'contain', width: 40, height: 40}}
                    />
                  </View>
                  <View className="bg-gray-100 rounded-full p-3 items-center space-x-2">
                    <Image
                      source={require('../../assets/Images/PhonePay.png')}
                      style={{width: 40, height: 40}}
                    />
                  </View>
                  <View className="bg-gray-100 rounded-full p-3 items-center space-x-2">
                    <Image
                      source={require('../../assets/Images/Paytm-Icon.png')}
                      style={{resizeMode: 'contain', width: 40, height: 40}}
                    />
                  </View>
                </View>
              </View>
              <View className="mt-5 items-center justify-center">
                <TouchableOpacity
                  onPress={() => setIsModalVisible4(true)}
                  className="flex-row items-center space-x-2 rounded-full border-2 border-gray-400 px-3 py-2.5">
                  <Text
                    className="text-black"
                    style={{fontFamily: 'Montserrat-SemiBold'}}>
                    View all Banks
                  </Text>
                  <Check name="search" size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View
                className="p-5 items-center"
                style={{shadowColor: 'gray', elevation: 30}}>
                <TouchableOpacity
                  style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                  className="items-center justify-center rounded-md w-full py-4 space-x-3">
                  <Check name="shield-checkmark" size={25} color="white" />
                  <Text
                    className="text-white"
                    style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}
                    onPress={() => {
                      navigation.navigate('BookingConformScreen');
                    }}>
                    Pay
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        {/* View all Banks */}
        <Modal
          transparent={true}
          visible={isModalVisible4}
          animationType="slide"
          onRequestClose={() => setIsModalVisible4(false)}>
          <KeyboardAvoidingView
            className="flex-1 justify-end"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <View className="bg-white rounded-tl-xl rounded-tr-xl">
              <View className="m-3 flex-row justify-between items-center mx-5">
                <Text
                  className="text-black mr-10"
                  style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                  Select Your Bank
                </Text>
                <TouchableOpacity
                  className="bg-black rounded-full items-center"
                  onPress={() => setIsModalVisible4(false)}>
                  <Cross name="cross" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <View className="">
                <Searchbar
                  placeholder="Search"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  inputStyle={{
                    fontSize: 18,
                    color: 'gray',
                    borderRadius: 20,
                    fontFamily: 'Montserrat-Medium',
                  }}
                  style={{
                    borderRadius: 10,
                    backgroundColor: '#f1f1f9',
                    shadowColor: 'gray',
                    margin: 13,
                  }}
                />
                <View className="mx-8">
                  <FlatList
                    data={BankList}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <View className="flex-row items-center space-x-4 border-b-2 border-gray-300 w-full py-2">
                        <View className="rounded-full p-2 items-center border border-gray-300">
                          <Image
                            source={item.BankImg}
                            style={{
                              width: 30,
                              height: 30,
                              resizeMode: 'contain',
                            }}
                          />
                        </View>
                        <Text
                          className="text-black"
                          style={{fontFamily: 'Montserrat-SemiBold'}}>
                          {item.BankName}
                        </Text>
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
              </View>
              <View
                className="p-5 items-center"
                style={{shadowColor: 'gray', elevation: 30}}>
                <TouchableOpacity
                  style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                  className="items-center justify-center rounded-md w-full py-4 space-x-3">
                  <Check name="shield-checkmark" size={25} color="white" />
                  <Text
                    className="text-white"
                    style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}
                    onPress={() => {
                      navigation.navigate('BookingConformScreen');
                    }}>
                    Pay
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </Modal>
        {/* FeedBack Screen */}
        <Modal
          transparent={true}
          visible={isModalVisible3}
          animationType="slide"
          onRequestClose={() => setIsModalVisible3(false)}>
          <KeyboardAvoidingView
            className="flex-1 justify-end"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
            <View className="bg-white rounded-tl-xl rounded-tr-xl">
              <View className="m-3 flex-row justify-between items-center mx-5">
                <Text
                  className="text-black mr-10"
                  style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                  Please let us know your reason for cancelling this payment
                </Text>
                <TouchableOpacity
                  className="bg-black rounded-full items-center"
                  onPress={() => setIsModalVisible3(false)}>
                  <Cross name="cross" size={25} color="white" />
                </TouchableOpacity>
              </View>
              <View className="mx-8 my-4">
                <RadioButton.Group
                  onValueChange={newValue => setValue(newValue)}
                  value={value}>
                  <View className="flex-row items-center justify-between border-b-2 border-gray-300 py-3">
                    <Text
                      className="text-black pr-3"
                      style={{fontSize: 14, fontFamily: 'Montserrat-SemiBold'}}>
                      I change my mind about making this purchase
                    </Text>
                    <RadioButton value="first" />
                  </View>
                  <View className="flex-row items-center justify-between border-b-2 border-gray-300 py-3">
                    <Text
                      className="text-black pr-10"
                      style={{fontSize: 14, fontFamily: 'Montserrat-SemiBold'}}>
                      I did not the payment option I was looking for
                    </Text>
                    <RadioButton value="second" />
                  </View>
                  <View className="flex-row items-center justify-between py-3">
                    <Text
                      className="text-black"
                      style={{fontSize: 14, fontFamily: 'Montserrat-SemiBold'}}>
                      Others (Please Mention)
                    </Text>
                    <RadioButton value="Third" />
                  </View>
                </RadioButton.Group>
              </View>
              <View
                className="bg-gray-100 p-5 mt-4 items-center space-y-4"
                style={{shadowColor: 'gray', elevation: 30}}>
                <TouchableOpacity
                  style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
                  className="items-center justify-center rounded-md w-full py-4 space-x-3">
                  <Text
                    className="text-white"
                    style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}
                    onPress={() => {
                      navigation.navigate('MovieTicketScreen');
                    }}>
                    Submit FeedBack
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', borderColor: '#1bc0f6'}}
                  className="items-center bg-white justify-center border rounded-md w-full py-4 space-x-3">
                  <Text
                    className="text-white"
                    style={{
                      fontSize: 20,
                      fontFamily: 'Montserrat-SemiBold',
                      color: '#1bc0f6',
                    }}
                    onPress={() => {
                      navigation.navigate('MovieTicketScreen');
                    }}>
                    Skip FeedBack
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
