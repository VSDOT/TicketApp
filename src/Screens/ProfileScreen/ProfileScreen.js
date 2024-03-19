import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import Ticket from 'react-native-vector-icons/dist/FontAwesome';
import Help from 'react-native-vector-icons/dist/Ionicons';
import Logout from 'react-native-vector-icons/dist/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

export default function ProfileScreen() {

  const [ isVisible , setIsModalVisible ] = useState(false);

  const navigation = useNavigation();

  const handleLogout = () => {
    setIsModalVisible(false);
    AsyncStorage.clear();
    RNRestart.Restart();
  }

  return (
    <ScrollView className="flex-1">
      <View style={{backgroundColor: '#1bc0f6'}}>
        <ImageBackground
          source={require('../../assets/Images/welcome-bg.png')}
          className="items-center justify-between pt-8 pb-44 pl-4"
          style={{flexDirection: 'row'}}>
          <StatusBar backgroundColor="#1bc0f6" />
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
            Profile
          </Text>
          <Text style={{color: '#1bc0f6'}}>1.30pm</Text>
        </ImageBackground>
      </View>
      <View className="items-center justify-center">
        <View
          className="absolute z-10 bottom-0 bg-white w-36 h-36 rounded-full items-center justify-center"
          style={{shadowColor: 'gray', elevation: 10}}>
          <Icon className="" name="user" size={80} color='#f5f5f5'/>
        </View>
        <View
          className="bg-white w-11/12 rounded-3xl py-4 absolute items-center justify-end"
          style={{shadowColor: 'gray', elevation: 10}}>
          <Text
            className="pt-14 text-gray-500"
            style={{fontFamily: 'Montserrat-SemiBold' , fontSize : hp(2)}}>
            12345676879
          </Text>
        </View>
      </View>
      <View className="mx-5 mt-20 mb-24">
        <View
          className="bg-white rounded-xl space-y-4 py-3"
          style={{shadowColor: 'gray', elevation: 1}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileAmountStatus')}
            className="items-center justify-start py-3 px-4 mx-4 space-x-3 border-b border-gray-200"
            style={styles.ProfileList}>
            <Icon className="" name="credit-card" size={18} color="black" />
            <Text
              className="text-xl text-gray-500"
              style={{fontFamily: 'Montserrat-SemiBold' ,  fontSize : hp(2)}}>
              Amount Status
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileHelpFeedback')}
            className="items-center justify-start py-3 px-4 mx-4 space-x-3 border-b border-gray-200"
            style={styles.ProfileList}>
            <Help className="" name="help-buoy" size={20} color="black" />
            <Text
              className="text-xl text-gray-500"
              style={{fontFamily: 'Montserrat-SemiBold' ,  fontSize : hp(2)}}>
              Help & feedbacks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileTermsTopBar')}
            className="items-center justify-start py-3 px-4 mx-4 space-x-3 border-b border-gray-200"
            style={styles.ProfileList}>
            <Icon
              className=""
              name="file-circle-question"
              size={18}
              color="black"
            />
            <Text
              className="text-xl text-gray-500"
              style={{fontFamily: 'Montserrat-SemiBold' ,  fontSize : hp(2)}}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileSettings')}
            className="items-center justify-start py-3 px-4 mx-4 space-x-3 border-b border-gray-200"
            style={styles.ProfileList}>
            <Help
              className=""
              name="settings-outline"
              size={20}
              color="black"
            />
            <Text
              className="text-xl text-gray-500"
              style={{fontFamily: 'Montserrat-SemiBold' ,  fontSize : hp(2)}}>
              Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}
            className="items-center justify-start py-2 px-4 mx-4 space-x-3"
            style={{flexDirection: 'row'}}>
            <Logout className="" name="logout" size={20} color="red" />
            <Text
              className="text-xl text-red-700"
              style={{fontFamily: 'Montserrat-SemiBold' ,  fontSize : hp(2)}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <KeyboardAvoidingView
          className="flex-1 justify-center"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
          <View className="bg-white rounded-xl m-6">
            <View className="m-3 flex-row justify-between items-center mx-5">
              <Text
                className="text-black mr-10"
                style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>
                Are you sure you want to logout ?
              </Text>
            </View>
            <View className="flex-row justify-end p-6 space-x-4">
              <Text className='text-blue-400' onPress={() => setIsModalVisible(false)} style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>Cancel</Text>
              <Text className='text-red-400' onPress={handleLogout} style={{fontSize: 16, fontFamily: 'Montserrat-SemiBold'}}>Logout</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ProfileList: {
    flexDirection: 'row',
  },
});
