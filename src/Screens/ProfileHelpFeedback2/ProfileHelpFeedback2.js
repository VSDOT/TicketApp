import {View, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {RadioButton, Text} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ProfileHelpFeedback2() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [feedBackMsg, setFeedBackMsg] = useState('');

  const [value, setValue] = useState('first');
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1">
      <StatusBar backgroundColor="#1bc0f6" />
      <View
        className="items-center justify-between p-5"
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
          style={{fontFamily: 'Montserrat-SemiBold' , fontSize : hp(2.5) }}>
          Help & Feedbacks
        </Text>
        <Text style={{color: '#1bc0f6'}}>1</Text>
      </View>
      <View className="mx-6 mt-3">
        <Text className="text-gray-500" style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>
          Please Select Feedback type
        </Text>
      </View>
      <View className="mx-6 my-5">
        <RadioButton.Group
          className="space-y-2"
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <View
            className="items-center border-b-2 border-gray-300 pb-4 space-x-2"
            style={{flexDirection: 'row'}}>
            <RadioButton value="Bugs" />
            <Text className="text-gray-500" style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>Bugs</Text>
          </View>
          <View
            className="items-center border-b-2 border-gray-300 pb-4 space-x-2"
            style={{flexDirection: 'row'}}>
            <RadioButton value="Feature" />
            <Text className="text-gray-500" style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>Feature</Text>
          </View>
          <View
            className="items-center border-b-2 border-gray-300 pb-4 space-x-2"
            style={{flexDirection: 'row'}}>
            <RadioButton value="Feedbacks" />
            <Text className="text-gray-500" style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>Feedbacks</Text>
          </View>
        </RadioButton.Group>
      </View>
      <View>
        <View className="mx-6">
          <Text className="text-gray-500" style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}>
            Please Enter Contact and Mobile Number
          </Text>
        </View>
        <TextInput
          value={email}
          onChangeText={setEmail}
          className="mx-6 px-4 text-md my-2 border-2 border-gray-400 rounded-md text-gray-300"
          placeholder="Email"
          style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}
          placeholderTextColor={'gray'}
        />
        <TextInput
          value={phoneNumber}
          onChangeText={setPhone}
          className="mx-6 px-4 text-md my-2 border-2 border-gray-400 rounded-md text-gray-300"
          placeholder="Phone Number"
          style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}
          placeholderTextColor={'gray'}
        />
        <TextInput
          value={feedBackMsg}
          onChangeText={setFeedBackMsg}
          multiline={true}
          numberOfLines={8}
          className="mx-6 px-4 text-md my-2 border-2 border-gray-400 rounded-md text-gray-300"
          placeholder="Enter Your Feedbacks"
          style={{fontFamily: 'Montserrat-Medium' , fontSize : hp(2)}}
          placeholderTextColor={'gray'}
        />
      </View>
      <View className="items-center justify-center mt-5">
        <TouchableOpacity
          style={{backgroundColor: '#1bc0f6', flexDirection: 'row'}}
          className="items-center justify-center rounded-xl px-32 py-4">
          <Text
            className="text-white"
            style={{fontSize: 20 , fontFamily : 'Montserrat-SemiBold'}}
            onPress={''}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
