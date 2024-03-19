import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const countryCodes = [
  {code: '91', label: 'India'},
  {code: 'US', label: 'United States'},
  // Add more country codes as needed
];

export default function LoginScreen() {
  const navigation = useNavigation();
  let [phoneNumber, setPhoneNumber] = useState('');
  let [error, setError] = useState('');
  let [selectedCountryCode, setSelectedCountryCode] = useState('91');
  let [modalVisible, setModalVisible] = useState(false);
  let [isChecked, setIsChecked] = useState(false);
  let [seconds, setSeconds] = useState(60);

  const handleSubmit = async () => {
    const UserNumber = {phoneNumber: phoneNumber};
    await AsyncStorage.setItem('UserNumber', JSON.stringify(UserNumber));
    if (phoneNumber.trim().length >= 10) {
      navigation.navigate('HomeScreen');
    }
    setError('Enter Your Phone Number');
  };

  //   Timer
  let startTimer = () => {
    setSeconds(60);
  };

  useEffect(() => {
    let interval;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  let handleCountryCodeSelect = code => {
    setSelectedCountryCode(code);
    setModalVisible(false);
  };

  let handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView>
        <View className="items-end justify-center mx-10 mt-10">
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text
              style={{
                fontSize: hp(2),
                color: '#1bc0f6',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white rounded-xl m-5" style={{ shadowColor : 'gray' , elevation : 5 }}>
          <View className="items-center p-8 space-y-3">
            <Text
              className="text-3xl"
              style={{fontFamily: 'Montserrat-SemiBold', color: '#1bc0f6'}}>
              Sign Up
            </Text>
            <Text
              className="text-md text-gray-800 text-center"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              Simply enter your phone number to sign in or create an account
            </Text>
          </View>
          <View className="items-center flex-row">
            <View className="mx-7" style={{flexDirection: 'row'}}>
              {/* Country Code Input */}
              <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View className="bg-gray-100 px-5 items-center justify-center rounded-l-md">
                  <Text style={styles.countryCodeLabel} className="text-black">
                    +{selectedCountryCode}
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              {/* Phone Number Input */}
              <View className="flex-1">
                {/* <Text style={styles.countryCodeInputLabel}>Phone Number:</Text> */}
                <TextInput
                  value={phoneNumber}
                  className="bg-gray-100 py-3 px-3 rounded-r-md text-black"
                  placeholder="Enter your phone number"
                  keyboardType="phone-pad"
                  onChangeText={text => setPhoneNumber(text)}
                  placeholderTextColor={'black'}
                  style={{fontFamily: 'Montserrat-SemiBold'}}
                />
              </View>
            </View>
          </View>
          <View className="mx-10 my-1">
            <Text
              className="text-red-500"
              style={{fontFamily: 'Montserrat-SemiBold', fontSize: 13}}>
              {error}
            </Text>
          </View>
          <View className="mx-10 my-2">
            <Text
              className="text-md text-black"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              OTP Verification
            </Text>
            <View className="flex-row items-center justify-center space-x-2 m-3">
              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="border border-gray-200 px-3 text-center rounded-md text-2xl text-black bg-gray-100"
                style={{fontFamily: 'Montserrat-SemiBold'}}
              />
              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="border border-gray-200 px-3 text-center rounded-md text-2xl text-black bg-gray-100"
                style={{fontFamily: 'Montserrat-SemiBold'}}
              />
              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="border border-gray-200 px-3 text-center rounded-md text-2xl text-black bg-gray-100"
                style={{fontFamily: 'Montserrat-SemiBold'}}
              />
              <TextInput
                maxLength={1}
                keyboardType="numeric"
                className="border border-gray-200 px-3 text-center rounded-md text-2xl text-black bg-gray-100"
                style={{fontFamily: 'Montserrat-SemiBold'}}
              />
            </View>
            <View style={styles.container} className="items-center mb-6">
              {seconds > 0 ? (
                <Text
                  style={
                    styles.timerText
                  }>{`Resend OTP in ${seconds} seconds`}</Text>
              ) : (
                <TouchableOpacity onPress={startTimer}>
                  <Text style={styles.resendText}>
                    I didn't receive code. Resend code
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            {/* <View style={{flexDirection: 'row'}} className="items-center">
              <Checkbox.Android
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={handleCheckboxToggle}
              />
              <Text
                className="text-md text-gray-500"
                style={{fontFamily: 'Montserrat-SemiBold'}}>
                Remind me.
              </Text>
            </View> */}
          </View>
        </View>
        <View className="justify-center items-center mt-32 mx-10">
          <TouchableOpacity
            onPress={handleSubmit}
            style={{backgroundColor: '#1bc0f6'}}
            className="py-4 rounded-full w-full items-center">
            <Text
              className="text-white"
              style={{fontSize: 17, fontFamily: 'Montserrat-SemiBold'}}>
              Sign In
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Montserrat-SemiBold',
  },
  resendText: {
    fontSize: hp(1.8),
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-SemiBold',
  },
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
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: 'Montserrat-SemiBold',
    color: 'gray',
  },
});
